import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>10 de novembro</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time available>
          <strong>08:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>Em aberto</span>
        </Time>
      </ul>
    </Container>
  );
}
