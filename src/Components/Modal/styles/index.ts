import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 10000;
  position: absolute;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: center;
  padding: 30px;
  background: rgba(0, 0, 0, 0.8);
`;
export const Modal = styled.div`
  position: relative;
  max-width: 800px;
  box-shadow: 0px 3px 5px - 1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease -in -out 2s;
  animation: fadeIn 400ms;
  overflow: auto;
  background: #fff;
`;
export const ModalClose = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px;
  cursor: pointer;
  z-index: 1000;
  color: #000;
  font-size: 20px;
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
`;
export const Title = styled.div`
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;
export const PlayButton = styled.button`
  position: absolute;
  top: 350px;
  left: 50px;
  height: 6vh;
  width: 10vw;
  min-width: 90px;
  font-size: 18px;
  border: 1px solid #fff;
  border-radius: 5px;
  @media screen and (max-width: 860px) {
    top: 230px;
  }
  @media screen and (max-width: 500px) {
    top: 140px;
  }
`;
export const ModalContent = styled.div`
  padding: 20px;
  color: white;
`;
export const Detail = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;
export const PersentText = styled.div`
  font-weight: bold;
  color: #46d369;
`;
export const NomalText = styled.div`
  font-weight: bold;
  margin-left: 20px;
`;
export const OverviewText = styled.div`
  font-weight: bold;
`;