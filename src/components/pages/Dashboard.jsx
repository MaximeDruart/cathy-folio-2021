import React, { useCallback, useState } from "react"
import styled from "styled-components"


import PageTemplate from "./PageTemplate"
import { Link } from "react-router-dom"
const StyledDashboard = styled.div`
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
  section.dashboard{
    margin-top: 20vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    padding: 0 10vw;
    .boxe{
        width: 33%;
        height: 500px;
        background: white;
        border-radius: 16px;
        margin: 5px 0;
    }
  }

`

const Dashboard = () => {


  return (
  
    <PageTemplate initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
      <StyledDashboard>
        <section className="dashboard">
            <h1 className="text-h2">Coming soon...</h1>
        </section>
      </StyledDashboard>
    </PageTemplate>
  )
}

export default Dashboard
