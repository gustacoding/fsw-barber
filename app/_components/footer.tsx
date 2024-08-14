import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-5">
          <p className="text-center text-sm text-gray-400">
            © 2024 Copyright <span className="font-bold">BarbaTop</span>.
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
