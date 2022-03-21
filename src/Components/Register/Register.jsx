import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Card from '../UI/Card/Card';
import classes from '../Login/Login.module.css';
import Button from '../UI/Button/Button';

import { auth, googleProvider } from "../../utils/firebaseConfig";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log({ data });
    await auth.createUserWithEmailAndPassword(data.email, data.password);
    navigate("/");
  };

  const handleSignInWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/");
  };

return(
    <Card className={classes.login}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`${classes.control1}
            `}>
                <label htmlFor="nombre" id="nombre">nombre</label>
                <input {...register("name")} type="text" placeholder="Enter a name" />

                <label htmlFor="email" id="email">Email</label>
                <input {...register("email")} type="text" placeholder="Enter your email" />

                <label htmlFor="password" id="password">password</label>
                <input {...register("password")} type="password" placeholder="Enter your Password" />

                <label htmlFor="Phone" id="Phone">Phone</label>
                <input {...register("Phone")} type="text" placeholder="Enter your PhoneNumber" />
            </div>
            <div className={classes.actions}>
            <Button type="submit" className={classes.btn} onClick={onSubmit}>
                Register
            </Button>
            </div>
            <Button onClick={handleSignInWithGoogle}>gugel</Button>
        </form>
    </Card>
)

}