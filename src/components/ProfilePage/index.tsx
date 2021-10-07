import React from 'react';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Jeferson Fernandes</h1>
        <h2>@jfernandesdev</h2>

        <p>Front-end Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de setembro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>21</strong>
          </span>
          <span>
            <strong>219 </strong> seguidores 
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage; 