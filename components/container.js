export default function Container({ children, className }) {
  return(
    <div className={`px-6 xl:px-10 max-w-screen-3xl mx-auto w-full ${className ? className : null}`}>
      {children}
    </div>
  )
}