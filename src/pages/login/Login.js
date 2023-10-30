/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import {
    Button, Container,
    Error, Form, Input, Links,
    Title, Wrapper, WrapperButtom,
} from "../../styles/stylePages/styledLogin/Login.Styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from '../../features/auth/authApi';
import { currentUser, saveCredentials } from '../../features/auth/authSlice'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    ///const user = useSelector(currentUser);
    const [login, { isLoading }] = useLoginMutation();

    useEffect(() => {
        setErrMsg('');
    }, [username, password]);

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const userData = await login({ username, password }).unwrap();
            dispatch(saveCredentials({ ...userData, username }));
            setUsername('');
            setPassword('');
            navigate('/users');
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Server unreacheable!");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing username or password!");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized!");
            } else {
                setErrMsg("Login failed!");
            }
            /*setErrMsg('Something wrong during the connexion.');
            console.error('Connexion failed: ', err);*/
        }
    };

    const content = isLoading ? <Container> <Wrapper><h1>Loading...</h1> </Wrapper> </Container> : (
        <Container>
            <Wrapper>
                <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <Title>SIGN IN</Title>
                <Form >
                    <Input placeholder="Username or Email" type="username"
                        /*ref={useRef}*/
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="off"
                        required />
                    <Input placeholder="Insert your password" type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <Button onClick={handleClick} disabled={isLoading}>{isLoading ? 'Logging in...' : 'Log in'}</Button>
                </Form>
                {/*{error && <Error>Email and password wrong!</Error>}*/}
                <WrapperButtom>
                    <Links to="/register">Create a new account</Links>
                    <Links to="/">BACK - HOME</Links>
                </WrapperButtom>
            </Wrapper>
        </Container>
    );

    return content;
};

export default Login;
