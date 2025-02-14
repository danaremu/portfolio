const Page = ({ children, nom }) => {
  return <div className={`page ${nom}`}>{children}</div>
}

export default Page
