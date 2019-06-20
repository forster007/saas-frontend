import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  background: #1b1e24;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 50px;
  padding: 15px 15px;
  position: fixed;
  width: 200px;
`;

export const NewZabbix = styled.button`
  background: transparent;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  height: 50px;
  margin: 0 0 8px;
  transition: all 0.2s;
  width: 50px;

  &:hover {
    border: 1px dashed rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Item = styled.div`
  align-items: center;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 0 0 15px;
  transition: all 0.2s;
  text-decoration: none;

  > span {
    padding-left: 15px;
    font-size: 14px;
    font-weight: ${props => (props.active ? 'bold' : 400)};

    &:hover {
      font-weight: bold;
    }
  }
`;

export const Logout = styled.button`
  background: transparent;
  border: 1px dashed #e04848;
  border-radius: 50%;
  color: #e04848;
  font-weight: bold;
  height: 50px;
  transition: all 0.2s;
  width: 50px;

  &:hover {
    border-color: #a43d3d;
    color: #a43d3d;
  }
`;
