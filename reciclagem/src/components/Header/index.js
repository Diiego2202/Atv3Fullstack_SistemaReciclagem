import { React } from 'react';
import { Layout, Menu, Button } from 'antd';
import { LogoutOutlined} from '@ant-design/icons';

const { Header } = Layout;

export default function HeaderComponent () {
  return (
    <Header theme="dark" style={{ height: '100px' , overflowX: 'auto'}}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '16px' , marginTop:"20px"}}></div>
        <Menu style={{ marginTop:"30px" }} theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Button style={{marginRight: 5}} href="/">Home</Button>
          <Button style={{marginRight: 5}} href='/usuario/premios'>Meus Prêmios</Button>
          <Button style={{marginRight: 5}} href="/usuario/pontos">Meus Pontos</Button>
          <Button style={{marginRight: 5}} href="/premio">Novo Prêmio</Button>  
          <Button style={{marginRight: 5}} href="/premio/lista">Listar Prêmios</Button>              
          <Button style={{marginRight: 5}} href="/premio/usuario">Atribuir Prêmios ao Usuário</Button>              
          <Button style={{marginRight: 5}} href="/usuario">Adicionar Usuário</Button>              
        </Menu>

        <div style={{ display: 'flex', alignItems: 'rigth', marginLeft: 'auto' }}>
            <Button  href="/" style={{ color: 'white' }} type="text">
            Logout
            </Button>
        </div>
      </div>
    </Header>
  );
};
