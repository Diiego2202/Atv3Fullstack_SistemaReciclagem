import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined , LockOutlined } from '@ant-design/icons';
import { Input, Button, Form, message,Typography} from 'antd';
import  Cookies  from "js-cookie";

export default function Usuario () {
    const { Title } = Typography;
    const navigate = useNavigate();

    const login = async (username , senha) => {
        const body = { username: username , senha: senha}
        const URL = "http://localhost:4000/usuario";
        const param = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body) }
        const resposta = await fetch(URL, param); 
        const respostaJson = await resposta.json();
        if (respostaJson.status !== 200){
            message.error('ERRO!! Usuário não cadastrado!');
        }else if (respostaJson.status === 200){
            message.success('Sucesso! Usuário cadastrdo!');
            Cookies.set('userId', (respostaJson.usuario._id))
            navigate("/inicio");
        }
    };

    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div >
                    <Title level={1} style={{ textAlign: 'left', marginTop: 15, marginBottom: 30}}>
                        Cadastro de usuário
                    </Title>
                </div>
                <Form name="login"  onFinish={ (dados) => login(dados.username, dados.senha) } 
                                    onFinishFailed={ (erros) => console.log(erros) }
                                    style={{ width: 500 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Form.Item  name="username"
                        rules={[{ required: true, message: 'Informe seu nome de usuário' }]}>
                            <Input
                                prefix={ <UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                placeholder="usuario"
                                name='username'
                                style={{ marginBottom: 10, width:300 }} 
                            />
                        </Form.Item>
                        <Form.Item  name="senha"
                        rules={[ { required: true, min: 6, message: 'Minimo de 6 digitos' } ]}>
                            <Input 
                                prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                type="password"
                                placeholder="Senha"
                                name="senha" 
                                style={{ marginBottom: 10, width: 300 }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Cadastrar</Button>
                        </Form.Item>
                    </div>
                </Form>   
            </div>      
}