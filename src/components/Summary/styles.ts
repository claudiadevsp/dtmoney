import styled from 'styled-components'


type PropsContainer = {
    highlight: string;
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
   
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
        display: block;
    }
`

export const Card = styled.div<PropsContainer>`
     background: var(--${props => props.highlight });
     padding: 1.5rem 2rem;
     border-radius: 0.25rem;
     color: var(--text-title);
`