import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

const title = 'Restoration and Renewal'

const Index = () => (
  <Layout title={title}>
    <div className="wrapper">
      <h1 className="section-headline">{title}</h1>
    </div>
    <Header />
  </Layout>
)

export default Index

Index.propTypes = {}
