import { NavigationSidebarCloseButtonPosition, NavigationSidebarPosition, NavigationSidebarVariation, NavigationVerticalMenuVariation } from '@digi/arbetsformedlingen';
import { DigiNavigationSidebar, DigiNavigationVerticalMenu, DigiNavigationVerticalMenuItem } from "@digi/arbetsformedlingen-react";

const pagesLevel1 = [
  {
    displayName: 'Yai',
    URI: 'Yai'
  }
]

const pagesLevel2 = [
  {
    displayName: 'Yai2',
    URI: 'Yai2'
  }
]

const Sidebar = () => {

  return (
    <DigiNavigationSidebar
      afActive={false}
      afStickyHeader={true}
      afBackdrop={true}
      afPosition={NavigationSidebarPosition.END}
      afCloseButtonPosition={NavigationSidebarCloseButtonPosition.END}
      afVariation={NavigationSidebarVariation.OVER}
      afCloseButtonText="Stäng"
    >
      <DigiNavigationVerticalMenu
        afVariation={NavigationVerticalMenuVariation.PRIMARY}
      >
        <ul>
          {
            pagesLevel1.map((level1) => (
              <li key={level1.URI}>
                <DigiNavigationVerticalMenuItem
                  afText={level1.displayName}
                  afHref={level1.URI}
                >
                </DigiNavigationVerticalMenuItem>
                  <ul>
                    {
                      pagesLevel2.map((level2) => (
                        <li key={level2.URI}>
                          <DigiNavigationVerticalMenuItem
                            afText={level2.displayName}
                            afHref={level2.URI}
                          >
                          </DigiNavigationVerticalMenuItem>
                        </li>
                      ))
                    }
                  </ul>
              </li>
            ))
          }
        </ul>
      </DigiNavigationVerticalMenu>
    </DigiNavigationSidebar>
  )
}

export default Sidebar;