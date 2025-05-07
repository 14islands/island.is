import {
  Box,
  Stack,
  Header,
  BulletList,
  Bullet,
  GridContainer,
  GridRow,
  GridColumn,
  DropdownMenu,
  AsyncSearch,
  AsyncSearchOption,
} from '@island.is/island-ui/core'

import memberList from '../assets/iceland_parliament_members.json'

import DefaultLayout from '../layouts/DefaultLayout'
import VideoEmbed from '../components/VideoEmbed'

import * as styles from './LandingPage.css'

// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsCard } from '@island.is/web/components'

const DemoBox = ({ text }: { text: string }) => (
  <div className={styles.demoBox}>{text}</div>
)

const SearchResultItem = ({ member }: { member: any }) => {
  return (
    <div className={styles.searchResultItem}>
      <div className={styles.searchResultItemName}>{member.label}</div>
      <div className={styles.searchResultItemParty}>{member.party}</div>
    </div>
  )
}

export const LandingPage = () => {
  return (
    <DefaultLayout data-testid="landing-page">
      {/* <GridContainer> */}
      <Header
        info={{
          title: 'Institution name',
          description: 'Application name',
        }}
        authenticated
        language="EN"
        logoutText="Logout"
        userName="John Doe"
        userAsDropdown
      />
      {/* <NxWelcome title="my-app" /> */}
      <DropdownMenu
        icon="person"
        items={[
          {
            href: '#',
            title: 'Einstaklingur',
          },
          {
            // onClick: () => {},
            href: '#',
            title: 'Fyrirtæki',
          },
        ]}
        openOnHover
        title="Innskráning"
      />
      <Box padding={2}>
        <Stack space={2}>
          <AsyncSearch
            filter
            colored
            // onInputValueChange={(value) => {}}
            options={memberList.map(
              (member): AsyncSearchOption => ({
                component: () => <SearchResultItem member={member} />,
                label: member.label,
                value: member.value,
              }),
            )}
            placeholder="Type in something"
            size="medium"
          />
        </Stack>
      </Box>
      <NewsCard title="News title" introduction="News intro" href="#" />
      {/* </GridContainer> */}
      Video:
      <VideoEmbed />
      <GridContainer className={styles.demoGrid}>
        <GridRow className={styles.demo}>
          <GridColumn span="4/12">
            <DemoBox text="span 4" />
          </GridColumn>
          <GridColumn span="8/12">
            <GridRow className={styles.demo}>
              <GridColumn span="6/12">
                <DemoBox text="span 6" />
              </GridColumn>
              <GridColumn span="6/12">
                <GridRow className={styles.demo}>
                  <GridColumn span="6/12">
                    <DemoBox text="span 6" />
                  </GridColumn>
                  <GridColumn span="6/12">
                    <DemoBox text="span 6" />
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>
          </GridColumn>
        </GridRow>
        <GridRow className={styles.demo}>
          <GridColumn span="3/12">
            <DemoBox text="span 3/12" />
          </GridColumn>
          <GridColumn span="9/12">
            <GridRow className={styles.demo}>
              <GridColumn span="3/9">
                <DemoBox text="span 3/9" />
              </GridColumn>
              <GridColumn span="6/9">
                <GridRow className={styles.demo}>
                  <GridColumn span="6/12">
                    <DemoBox text="span 6/12" />
                  </GridColumn>
                  <GridColumn span="6/12">
                    <DemoBox text="span 6/12" />
                  </GridColumn>
                </GridRow>
              </GridColumn>
            </GridRow>
          </GridColumn>
        </GridRow>
        <GridRow className={styles.demo}>
          <GridColumn span="3/12">
            <DemoBox text="span 3/12" />
          </GridColumn>
          <GridColumn span="3/12">
            <DemoBox text="span 3/12" />
          </GridColumn>
          <GridColumn span="3/12">
            <DemoBox text="span 3/12" />
          </GridColumn>
          <GridColumn span="3/12">
            <DemoBox text="span 3/12" />
          </GridColumn>
        </GridRow>
      </GridContainer>
      <GridContainer>
        <BulletList type="ul">
          <Bullet>
            Réttur til fæðingarorlofs vegna fæðingar fellur niður er barnið nær
            24 mánaða aldri.
          </Bullet>
          <Bullet>
            Réttur til fæðingarorlofs vegna ættleiðingar eða varanlegs fóstur
            fellur niður 24 mánuðum eftir að barnið kom inn á heimilið.
          </Bullet>
          <Bullet>
            Réttur foreldris til fæðingarorlofs er bundinn því að það fari
            sjálft með forsjá barnsins eða hafi sameiginlega forsjá ásamt hinu
            foreldri þess þegar taka fæðingarorlofs hefst.
          </Bullet>
        </BulletList>
      </GridContainer>
    </DefaultLayout>
  )
}

export default LandingPage
