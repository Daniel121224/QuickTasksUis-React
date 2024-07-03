import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';

const Login = () => {

    //para redireccionar de un componente a otro
    const navigate = useNavigate();

    //definimos el estado inicial de las variables
    const [usuario, setUsuario] = useState({
        correo: '',
        contrasena: ''
    });

    const { correo, contrasena } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById('correo').focus();
    }, []);

    const iniciarSesion = async () => {
        if (contrasena.length < 6) {
            const message = 'La contraseña debe ser de al menos 6 caracteres';
            swal({
                title: 'Error',
                text: message,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Aceptar',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            const data = {
                correo: usuario.correo,
                contrasena: usuario.contrasena
            }
            const response = await APIInvoke.invokePOST('/auth', data);
            console.log(response);

            if (response.message === 'El usuario no existe' || response.message === 'Contraseña incorrecta') {
                const message = 'No fue posible iniciar sesion, verifique los datos ingresados';
                swal({
                    title: 'Error',
                    text: message,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'Aceptar',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            } else {
                //Obtenemos el token
                const jwt = response.token;

                //guardamos el token en el local storage
                localStorage.setItem('token', jwt);

                //redireccionamos al home
                navigate('/home');
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>QuickTasks</b>UIS</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bienvenido, Inicie sesión</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    id="correo"
                                    name="correo"
                                    value={correo}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    id="contrasena"
                                    name="contrasena"
                                    value={contrasena}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className="social-auth-links text-center mb-3">
                                <button type='submit' className="btn btn-block btn-primary">
                                    Ingresar
                                </button>
                                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                                    Registrarse
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;