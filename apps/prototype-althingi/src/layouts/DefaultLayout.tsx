/* eslint-disable @nx/enforce-module-boundaries */
import {
  Footer,
  Hidden,
  FocusableBox,
  Box,
  GridContainer,
  GridRow,
  GridColumn,
  Columns,
  Column,
  Logo,
  ResponsiveSpace,
  Button,
  AlertBanner,
} from '@island.is/island-ui/core'

// web imports
import { SubpageLayout } from '@island.is/web/screens/Layouts/Layouts'
import { SidebarLayout } from '@island.is/web/screens/Layouts/SidebarLayout'
import { DefaultHeader } from '@island.is/web/components'
import { SubpageMainContent } from '@island.is/web/components'
import ScrollToTop from '../components/ScrollToTop'

// import * as styles from './DefaultLayout.css'

const marginLeft = [1, 1, 1, 2] as ResponsiveSpace

const Header = ({
  showSearchInHeader = true,
  buttonColorScheme = 'default',
  megaMenuData,
  languageToggleQueryParams,
  organizationSearchFilter,
  searchPlaceholder,
  customTopLoginButtonItem,
  loginButtonType = 'dropdown',
  children,
}: any) => {
  const english = false
  const isWhite = false
  return (
    <header>
      <Hidden print={true}>
        <GridContainer>
          <GridRow>
            <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
              <Columns alignY="center" space={2}>
                <Column width="content">
                  <FocusableBox
                    href={english ? '/en' : '/'}
                    data-testid="link-back-home"
                  >
                    <Hidden above="md">
                      <Logo
                        id="header-logo-icon"
                        width={40}
                        iconOnly
                        solid={isWhite}
                      />
                    </Hidden>
                    <Hidden below="lg">
                      <Logo id="header-logo" width={160} solid={isWhite} />
                    </Hidden>
                  </FocusableBox>
                </Column>
                <Column>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flexEnd"
                    width="full"
                  >
                    <Box marginLeft={marginLeft}>
                      <Hidden above="sm">
                        <a href="#" tabIndex={-1}>
                          <Button
                            // colorScheme={props.colorScheme}
                            variant="utility"
                            icon="person"
                            title="Mínar síður"
                            as="span"
                          />
                        </a>
                      </Hidden>
                      <Hidden below="md">
                        <a href="#" tabIndex={-1}>
                          <Button
                            // colorScheme={props.colorScheme}
                            variant="utility"
                            icon="person"
                            as="span"
                          >
                            Mínar síður
                          </Button>
                        </a>
                      </Hidden>
                    </Box>

                    <Box
                      marginLeft={marginLeft}
                      display={['none', 'none', 'none', 'block']}
                    >
                      <Button
                        colorScheme={buttonColorScheme}
                        variant="utility"
                        data-testid="language-toggler"
                        // onClick={onClick}
                        aria-label={'en'}
                        lang={'en'}
                      >
                        EN
                      </Button>
                    </Box>
                    <Box marginLeft={marginLeft}>
                      <Button
                        variant="utility"
                        icon="menu"
                        // colorScheme={buttonColorScheme}
                        data-testid="frontpage-burger-button"
                        // onClick={onMenuOpen}
                      >
                        Valmynd
                      </Button>
                    </Box>
                  </Box>
                </Column>
              </Columns>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Hidden>
      {children}
    </header>
  )
}

const DefaultLayout = ({
  children,
  sidebarChildren,
  detailsChildren,
  preFooterChildren,
}: {
  children?: React.ReactNode
  sidebarChildren?: React.ReactNode
  detailsChildren?: React.ReactNode
  preFooterChildren?: React.ReactNode
}) => {
  return (
    // <div className={styles.container}>
    <>
      <ScrollToTop />
      <Header />
      <DefaultHeader
        title=""
        background="url(/assets/images/althingi-logo.png) center center / auto 50% no-repeat, linear-gradient(88.41deg, #102957 -30.83%, #25498F 69.75%, #224D9F 99.36%)"
        titleColor="white"
        fullWidth
        // image="https://images.ctfassets.net/8k0h54kbe6bj/26GpjBNZtKP3FVYlnqplLz/cdf4ec749375332fc3ff40fe8894ca9b/Artboard_1_1.svg"
        // imageIsFullHeight={true}
        // imageObjectFit="cover"
        // imageObjectPosition="center"
        // imagePadding="0"
        titleSectionPaddingLeft={0}
        // logo="https://images.ctfassets.net/8k0h54kbe6bj/7yEWHxuf2kBEhfQhoL6idD/c78ddc917db536f6d4cc7557c7895866/thjodskjalasafn-logo.svg"
        // logoHref="#"
        // isSubpage // controls height
      />
      <AlertBanner
        variant="info"
        title="BEIN ÚTSENDING"
        description="Miðvikudagur 14. mars: Þingfundur hefst kl. 15:00."
        link={{
          href: '#',
          title: 'Horfa á útsendingu',
        }}
      />
      <SubpageLayout
        main={
          <SidebarLayout sidebarContent={sidebarChildren} isSticky={false}>
            <SubpageMainContent main={children} />
          </SidebarLayout>
        }
        details={
          detailsChildren
          //   <SubpageDetailsContent
          //     header={
          //       <Text variant="h2" color="blue600">
          //         Details Header
          //       </Text>
          //     }
          //     content={detailsChildren}
          //   ></SubpageDetailsContent>
        }
      />
      <GridContainer>{preFooterChildren}</GridContainer>
      <Footer showMiddleLinks={false} />
    </>
  )
}

export default DefaultLayout
