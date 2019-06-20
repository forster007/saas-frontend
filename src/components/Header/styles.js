import styled from 'styled-components';

export const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

export const ActionButton = styled.button`
  background-color: #fb3c4a;
  border: 1px solid #fb3c4a;
  border-radius: 2px;
  height: 30px;
  transition: all 0.2s;
  width: 30px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Company = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 50px;
`;

export const CompanyLabel = styled.span`
  color: #697b92;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CompanyName = styled.span`
  color: #b9b9b9;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

export const Container = styled.div`
  background: #22262e;
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
  z-index: 2;
`;

export const PreHeader = styled.div`
  align-items: center;
  display: flex;
  padding-left: 12px;
  width: 230px;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
  width: 100%;
`;
