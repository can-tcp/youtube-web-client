function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-content min-h-screen w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      {children}
    </div>
  )
}

export default PageContainer
