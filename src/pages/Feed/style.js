import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
`

export const Title = styled.h2`
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;

`

export const TitleHighlight = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`

export const TextContent = styled.p`
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
    color: #fff;
`

export const Image = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;

    @media only screen and (max-width: 700px){
        display:none;
    }

`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: ${({flex}) => flex};
    padding-right: 24px;
`