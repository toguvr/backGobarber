import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from 'components/Notifications';
import { useSelector } from 'react-redux';
import logo from '~/assets/logoCor.svg';
import { Container, Content, Profile } from './styles';
import { routes } from '~/routes';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to={routes.dashboard}>DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to={routes.profile}>Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="GoBarber"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
