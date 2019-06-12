import styled from 'styled-components';

export const Company = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  color: #000;
  cursor: pointer;
  display: flex;
  height: 40px;
  margin: 0 10px 10px 0;
  padding: 0 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  width: 100%;
`;

export const TitleText = styled.span`
  color: #353940;
  font-size: 20px;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
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

export const Zabbix = styled.button`
  background: transparent;
  border: 0;
  margin: 0 0 8px;

  img {
    border-radius: 50%;
    height: 50px;
    transition: all 0.2s;
    width: 50px;
  }

  &:hover img {
    border-radius: 30%;
  }
`;

export const ZabbixList = styled.div`
  display: flex;
  flex-direction: column;
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
