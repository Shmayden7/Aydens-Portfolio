import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
   width: 67%;
   position: relative;
   background-image: url(${(props) => props.bgPhoto});
   background-size: cover;
   border-radius: 8px;
   box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.6);
   display: flex;
   flex-direction: column;
   background-position: center center;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`;

const Content = styled.div`
   width: 80%;
   border-radius: 8px;
   margin-top: 15%;
   position: relative;
   top: 50px;
   color: white;
   background-color: white;
   padding: 20px;
   box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
`;

const Title = styled.span`
   font-size: 24px;
   font-weight: 800;
   color: ${(props) => props.color};
`;

const Subtitle = styled.span`
   margin-top: 8px;
   font-size: 20px;
   font-weight: 800;
   display: block;
   color: ${(props) => props.color};
`;

const Top = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row-reverse;
   width: 100%;
`;

const BtnRow = styled.div`
   margin-top: 15px;
   display: flex;
   justify-content: space-between;
   width: 100%;
   align-items: center;
`;

const Btn = styled.span`
   color: white;
   background-color: #9352ae;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 32px;
   width: 32px;
   border-radius: 16px;
   cursor: pointer;
`;

const SecondTitle = styled.span`
   font-size: 16px;
   color: #1F2126;
   display: block;
   font-weight: 400;
`;

const Waterloo = ({
   title,
   subtitle,
   titleColor = "#9352ae",
   subtitleColor = "#9CA1AE",
   secondTitle,
   bgPhoto,
   btnIcon,
}) => (
   <Container bgPhoto={bgPhoto}>
      <Top>
         <img className='waterloo-icon' src='img/education/waterloo.png' />
      </Top>

      {(title || subtitle) && (
         <Content>
            {title && <Title color={titleColor}>{title}</Title>}
            {subtitle && <Subtitle color={subtitleColor}>{subtitle}</Subtitle>}
            {(secondTitle || btnIcon) && (
               <BtnRow>
                  {secondTitle && (
                     <SecondTitle >
                        {secondTitle}
                     </SecondTitle>
                  )}
                  {btnIcon && (
                     <Btn >
                        <i className={btnIcon} />
                     </Btn>
                  )}
               </BtnRow>
            )}
         </Content>
      )}
   </Container>
);

Waterloo.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   iconName: PropTypes.string,
   iconSize: PropTypes.number,
   iconColor: PropTypes.string,
   bgPhoto: PropTypes.string,
   btnBg: PropTypes.string,
   btnColor: PropTypes.string,
   btnIcon: PropTypes.string,
   secondTitle: PropTypes.string,
   secondTitleColor: PropTypes.string,
   ratingAverage: PropTypes.oneOf([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]),
   totalReviews: PropTypes.number,
};

export default Waterloo;
