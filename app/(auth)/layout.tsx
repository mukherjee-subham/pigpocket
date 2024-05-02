import Logo from "@/components/Logo"

type Props = {
  children: React.ReactNode
}

const layout = ({children}: Props) => {
  return <div className="relative flex h-screen w-full flex-col items-center justify-center">
    <Logo/>
    <div className="mt-12">{children}</div>
  </div>
}

export default layout;