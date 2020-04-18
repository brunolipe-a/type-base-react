import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #F3f3f3;
  min-height: 100%;
  flex: 1
`;

export const Sidebar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  min-height: 100%;
  color: #FFF;
  width: 7%
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
`;

export const Topbar = styled.header`
  display: flex;
  width: 100%;
  background-color: #AAA;
  height: 55px
`;
