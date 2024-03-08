import { DigiHeader, DigiHeaderNavigation, DigiHeaderNavigationItem } from "@digi/arbetsformedlingen-react"
import { Link, useLocation } from "react-router-dom"
import { Routes } from "../../main"

const Header = () => {
  const { pathname } = useLocation()
  const routes = [...Routes]

  return (
    <DigiHeader
      afSystemName="Designsystem"
      afHideSystemName={false}
      afMenuButtonText="Meny"
    >
      <Link to="/" slot="header-logo" aria-label="Designsystemets startsida"></Link>

      <div slot="header-navigation">
					<DigiHeaderNavigation
						afCloseButtonText="Stäng"
						afCloseButtonAriaLabel="Stäng meny"
						afNavAriaLabel="Huvudmeny"
						afBackdrop={true}
					>
            {routes
              .filter((route) => route.path !== '/')
              .map((route) => 
              <DigiHeaderNavigationItem
                key={route.path}
                afCurrentPage={pathname === route.path}
              >
                <Link
                  to={route.path}
                >{route.label}</Link>
              </DigiHeaderNavigationItem>
            )}
					</DigiHeaderNavigation>
				</div>
    </DigiHeader>
  )
}

export default Header

