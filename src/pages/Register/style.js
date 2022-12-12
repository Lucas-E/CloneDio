import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 40px;

    display: flex;
    flex-direction: Column;
    justify-content: 'space-around';
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;

`

export const Wrapper = styled.div`
    max-width: 400px;
    width: 100%;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex:1;

`

export const Row = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
`
export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;

`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

`
export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color:#e5e044;

`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color:#E23DD7;

`

export const HaveAccount = styled.p`
    text-align: left;
`

export const PoliticaText = styled.p`
    font-size: 14px;
    font-weight: lighter;
    margin-top: 10px;
`

export const TextLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color:#e5e044;
    text-decoration: none;

    &:hover{
        color:#e5e04490;
    }

`