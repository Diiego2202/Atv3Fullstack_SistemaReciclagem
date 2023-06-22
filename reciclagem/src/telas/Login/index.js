import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined , LockOutlined } from '@ant-design/icons';
import { Input, Button, Form, message,Typography} from 'antd';
import  Cookies  from "js-cookie";

export default function Login () {
    const { Title } = Typography;
    const navigate = useNavigate();

    const login = async (username , senha) => {
        const body = { username: username , senha: senha }
        const URL = "http://localhost:4000/usuario/login/";
        const param = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body) }
        const resposta = await fetch(URL, param); 
        const respostaJson = await resposta.json();
        console.log(resposta.status)
        if (respostaJson.status !== 200){
            message.error("ERRO!! Login inválido!");
        }else if (respostaJson.status === 200){
            message.success('Sucesso!! Login efetuado!');
            Cookies.remove("userId");
            Cookies.set('userId', (respostaJson.usuario.user._id))
            navigate("/inicio");
        }
    };

    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div >
                    <Title level={1} style={{ textAlign: 'left', marginTop: 20, marginBottom: 40 }}>
                        Login
                    </Title>
                </div> 
                <Form name="login"  onFinish={ (dados) => login(dados.username, dados.senha) } 
                                    onFinishFailed={ (erros) => console.log(erros) }
                                    style={{ width: 500 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Form.Item  name="username"
                        rules={[{ required: true, message: 'Digite seu nome de usuário' }]}>
                            <Input
                                prefix={<UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                placeholder="usuario"
                                name='username'
                                style={{ marginBottom: 10, width:300 }}
                            />
                        </Form.Item>
                        <Form.Item  name="senha"
                        rules={[{ required: true }]}>
                            <Input 
                                prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                type="password"
                                placeholder="Senha"
                                name="senha" 
                                style={{ marginBottom: 10, width: 300}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Login</Button>
                        </Form.Item>
                    </div>
                </Form>   
                <p style={{ marginTop: -15}}>Não há usuários?</p>
                <Button style={{ marginTop: -15}} href="/usuario">Faça seu cadastro!</Button>
            </div>      
}