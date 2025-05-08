import { Link } from 'react-router-dom'

import {
  Box,
  Navigation,
  Breadcrumbs,
  Text,
  Columns,
  Column,
  Stack,
  CategoryCard,
  Icon,
  AlertBanner,
  Tag,
  ActionCard,
  Link as IslandLink,
} from '@island.is/island-ui/core'

import memberList from '../assets/iceland_parliament_members.json'

import DefaultLayout from '../layouts/DefaultLayout'
import Webreader from '../components/Webreader'
import VideoEmbed from '../components/VideoEmbed'

import * as styles from './LandingPage.css'

// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsCard } from '@island.is/web/components'

const SearchResultItem = ({ member }: { member: any }) => {
  return (
    <div className={styles.searchResultItem}>
      <div className={styles.searchResultItemName}>{member.label}</div>
      <div className={styles.searchResultItemParty}>{member.party}</div>
    </div>
  )
}

const sidebarLinks = [
  {
    href: '#',
    title: 'Sessions & issues',
  },
  {
    active: false,
    href: '/members',
    title: 'Members of Parliament',
  },
  {
    href: '#',
    title: 'Committees',
  },
  {
    href: '#',
    title: 'International work',
  },
  {
    href: '#',
    title: 'Laws',
  },
  {
    href: '#',
    title: 'Resolutions',
  },
  {
    href: '#',
    title: 'Reports',
  },
  {
    href: '#',
    title: 'About',
  },
]

export const LandingPage = () => {
  return (
    <DefaultLayout
      data-testid="landing-page"
      sidebarChildren={
        <Navigation
          title="Alþingi"
          baseId="desktopNav"
          colorScheme="blue"
          items={sidebarLinks}
          renderLink={(link) => {
            return <Link to={link.props.href}>{link}</Link>
          }}
        />
      }
      preFooterChildren={
        <Box paddingBottom={[5, 5, 10]}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="spaceBetween"
            columnGap={1}
          >
            <Text variant="h2" as="h2" paddingTop={[4, 4, 4]} paddingBottom={4}>
              Nýjustu tilkynningar
            </Text>
            <IslandLink
              href="#"
              underline="normal"
              underlineVisibility="always"
            >
              Sjá allar tilkynningar
            </IslandLink>
          </Box>
          <Stack space={3}>
            <Columns space={[2, 2, 3, 3]} collapseBelow="lg">
              <Column width="6/12">
                <NewsCard
                  title="The Icelandic Human Rights Institute is launched"
                  introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with..."
                  href="#"
                  readMoreText="Read more"
                  date="2025-05-05"
                />
              </Column>
              <Column width="6/12">
                <NewsCard
                  title="The Icelandic Human Rights Institute is launched"
                  introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with..."
                  href="#"
                  readMoreText="Read more"
                  date="2025-05-05"
                />
              </Column>
            </Columns>
            <Columns space={[2, 2, 3, 3]} collapseBelow="lg">
              <Column width="6/12">
                <NewsCard
                  title="The Icelandic Human Rights Institute is launched"
                  introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with..."
                  href="#"
                  readMoreText="Read more"
                  date="2025-05-05"
                />
              </Column>
              <Column width="6/12">
                <NewsCard
                  title="The Icelandic Human Rights Institute is launched"
                  introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with..."
                  href="#"
                  readMoreText="Read more"
                  date="2025-05-05"
                />
              </Column>
            </Columns>
          </Stack>
        </Box>
      }
    >
      <Webreader marginTop={[5, 5, 0]} marginBottom={5} readClass="rs_read" />

      <Box display={['block', 'block', 'none']}>
        <Navigation
          baseId="mobileNav"
          colorScheme="blue"
          isMenuDialog
          renderLink={(link) => {
            return <Link to={link.props.href}>{link}</Link>
          }}
          items={sidebarLinks}
          title={'Alþingi'}
          // activeItemTitle={null}
        />
      </Box>
      <Box paddingBottom={[5, 5, 10]}>
        <Text variant="h1" as="h1" paddingTop={[4, 4, 0]} paddingBottom={4}>
          Alþingi
        </Text>
        <Text variant="default" as="p">
          Alþingi Íslendinga er æðsta og elsta stofnun þjóðarinnar. Alþingi á
          rætur sínar að rekja til ársins 930 og var endurreist í Reykjavík árið
          1844. Meginverkefni Alþingis er lagasetning en þingið fer einnig með
          viðamikið eftirlitshlutverk.
        </Text>
      </Box>

      <Box paddingBottom={[5, 5, 5]}>
        <Columns space={[2, 2, 4, 4]} collapseBelow="lg">
          <Column>
            <VideoEmbed posterSrc="/assets/images/video-poster.jpg" />
          </Column>
          <Column width="content">
            <Box className={styles.meetingsBox}>
              <Stack space={[1, 1, 2, 2]}>
                <Text
                  variant="eyebrow"
                  as="h2"
                  paddingTop={0}
                  paddingBottom={0}
                  color="blueberry600"
                >
                  Fundir og heimsóknir, 14. maí
                </Text>
                <Text variant="small" as="p" color="blueberry600">
                  09:00{' '}
                  <IslandLink href="#">Budget Committee Meeting</IslandLink>
                </Text>
                <Text variant="small" as="p" color="blueberry600">
                  09:30 <IslandLink href="#">Visit from Grundaskóli</IslandLink>
                </Text>
                <Text variant="small" as="p" color="blueberry600">
                  10:15 AM{' '}
                  <IslandLink href="#">Visit from Grundaskóli</IslandLink>
                </Text>
                <Text variant="small" as="p" color="blueberry600">
                  13:00{' '}
                  <IslandLink href="#">
                    Heimsókn frá Stuðlum og Blönduhlíð
                  </IslandLink>
                </Text>
                <Text variant="small" as="p" color="blueberry600">
                  15:00 PM{' '}
                  <IslandLink href="#">Parliamentary session</IslandLink>
                </Text>
                <Text variant="small">
                  <IslandLink
                    href="#"
                    underline="normal"
                    underlineVisibility="always"
                  >
                    Sjá meira
                  </IslandLink>
                </Text>
              </Stack>
            </Box>
          </Column>
        </Columns>
      </Box>

      <Box paddingBottom={[5, 5, 5]}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="spaceBetween"
          columnGap={1}
        >
          <Text variant="h2" as="h2" paddingTop={[4, 4, 4]} paddingBottom={4}>
            Nýjustu frumvörp
          </Text>
          <IslandLink href="#" underline="normal" underlineVisibility="always">
            Sjá öll frumvörp
          </IslandLink>
        </Box>
        <Stack space={3}>
          <ActionCard
            heading="Leikskólar"
            renderHeading={(heading) => (
              <Box display="flex" alignItems="center" columnGap={2}>
                <Icon icon="document" type="outline" color="blue400" />
                {heading}
              </Box>
            )}
            text="1. umræða · Ásthildur Lóa Þórs­dóttir"
            date="7. maí 2025"
            eyebrow="Case 358"
            cta={{
              label: 'Skoða frumvarp',
              variant: 'text',
            }}
            tag={{
              label: 'Leikskólar',
              variant: 'blue',
              renderTag: (cld) => (
                <Box display="flex" alignItems="center" columnGap={1}>
                  {cld}
                  <Tag outlined variant="blue">
                    Fjölskyldumál
                  </Tag>
                  <Tag outlined variant="blue">
                    Börn
                  </Tag>
                </Box>
              ),
            }}
          />
          <ActionCard
            heading="Maternity and parental leave"
            renderHeading={(heading) => (
              <Box display="flex" alignItems="center" columnGap={2}>
                <Icon icon="document" type="outline" color="blue400" />
                {heading}
              </Box>
            )}
            text="1. umræða ·  Bergþór Óla­son"
            date="7. maí 2025"
            eyebrow="Case 225"
            cta={{
              label: 'Skoða frumvarp',
              variant: 'text',
            }}
            tag={{
              label: 'Equality',
              variant: 'blue',
            }}
          />
          <ActionCard
            heading="Preschool enrollment"
            renderHeading={(heading) => (
              <Box display="flex" alignItems="center" columnGap={2}>
                <Icon icon="document" type="outline" color="blue400" />
                {heading}
              </Box>
            )}
            text="1. umræða · Dagur B. Eggerts­son"
            date="6. maí 2025"
            eyebrow="Case 290"
            cta={{
              label: 'Skoða frumvarp',
              variant: 'text',
            }}
            tag={{
              label: 'Children',
              variant: 'blue',
            }}
          />
        </Stack>
      </Box>

      <Box paddingBottom={[5, 5, 5]}>
        <Text variant="h2" as="h2" paddingTop={[4, 4, 4]} paddingBottom={4}>
          Flýtitenglar
        </Text>
        {/* <Stack space={3}> */}
        <Columns space={[2, 2, 3, 3]} collapseBelow="lg">
          <Column>
            <CategoryCard
              heading="Have your say in lawmaking"
              text="Join the conversation and help shape new laws and policies. Share your views, submit suggestions, and take part in the democratic process — no legal background required."
              icon={<Icon icon={'school'} type={'outline'} color={'blue400'} />}
            />
          </Column>
          <Column>
            <CategoryCard
              heading="Have your say in lawmaking"
              text="Join the conversation and help shape new laws and policies. Share your views, submit suggestions, and take part in the democratic process — no legal background required."
              icon={<Icon icon={'school'} type={'outline'} color={'blue400'} />}
            />
          </Column>
        </Columns>
        {/* </Stack> */}
      </Box>
      {/* </GridContainer> */}
    </DefaultLayout>
  )
}

export default LandingPage
