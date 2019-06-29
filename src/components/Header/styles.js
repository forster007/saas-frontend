import styled from 'styled-components';

export const Actions = styled.div`
  align-items: center;
  display: flex;
`;

export const ActionButton = styled.button`
  align-items: center;
  background-color: #fb3c4a;
  border: 1px solid #fb3c4a;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-left: 10px;
  overflow-x: hidden;
  padding-left: 7px;
  transition: all 0.3s;
  width: 30px;

  &:hover {
    opacity: 0.9;
    width: ${props => props.maxWidth}px;
  }
`;

export const ActionButtonText = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  left: 5px;
  opacity: ${props => (props.hovered ? 1 : 0)};
  overflow: hidden;
  position: relative;
  transition: all 0.3s;
  white-space: nowrap;
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
