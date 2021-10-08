import React from 'react';
import StickyBox from 'react-sticky-box';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
          <SearchInput placeholder="Buscar no Twitter" />
          <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements = {[
              <FollowSuggestion 
                name="Fulano de Tal"
                nickname="@fulano123"
              />,
              <FollowSuggestion 
                name="Deltrano Alves"
                nickname="@deltrano"
              />,
              <FollowSuggestion 
                name="Ana Maria"
                nickname="@ana_maria" 
              />
            ]}
          />

          <List
            title="O que está acontecendo"
            elements = {[
              <News />,
              <News />,
              <News />
            ]}
          />

          <List
            title="O que está acontecendo"
            elements = {[
              <News />,
              <News />,
              <News />
            ]}
          />

          <List
            title="O que está acontecendo"
            elements = {[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;