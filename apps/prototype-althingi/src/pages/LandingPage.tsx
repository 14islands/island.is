import { Link } from 'react-router-dom'

import {
  Box,
  Navigation,
  Text,
  Columns,
  Column,
  Stack,
  CategoryCard,
  Icon,
  Tag,
  ActionCard,
  Link as IslandLink,
} from '@island.is/island-ui/core'

import DefaultLayout from '../layouts/DefaultLayout'
import Webreader from '../components/Webreader'
import VideoEmbed from '../components/VideoEmbed'

import * as styles from './LandingPage.css'

// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsCard } from '@island.is/web/components'

const sidebarLinks = [
  {
    href: '#',
    title: 'Forsíða',
    active: true,
  },
  {
    href: '#',
    title: 'Þingmál',
  },
  {
    href: '/members',
    title: 'Þingmenn',
  },
  {
    href: '#',
    title: 'Nefndir',
  },
  {
    href: '#',
    title: 'Alþjóðastarf',
  },
  {
    href: '#',
    title: 'Lagasafn',
  },
  {
    href: '#',
    title: 'Ályktanir',
  },
  {
    href: '#',
    title: 'Um Alþingi',
  },
]

export const LandingPage = () => {
  return (
    <DefaultLayout
      data-testid="landing-page"
      sidebarChildren={
        <Navigation
          title="Valmynd"
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
                  title="Mannréttindastofnun Íslands tekin til starfa"
                  titleVariant="h3"
                  introduction="Mannréttindastofnun Íslands tók til starfa 1. maí sl. og starfar hún á vegum Alþingis samkvæmt lögum nr. 88/2024..."
                  href="#"
                  readMoreText="Lesa meira"
                  date="2025-05-05"
                  image={{
                    url: '/assets/images/news-image-1.jpg',
                    title: 'Mannréttindastofnun Íslands tekin til starfa',
                  }}
                />
              </Column>
              <Column width="6/12">
                <NewsCard
                  title="Varamenn taka sæti"
                  titleVariant="h3"
                  introduction="Árni Rúnar Þorvaldsson tekur sæti á Alþingi mánudaginn 5. maí sem varaþingmaður fyrir Ölmu D. Möller. Sigurþóra Steinunn Bergsdóttir tekur sæti sama dag sem varaþingmaður..."
                  href="#"
                  readMoreText="Lesa meira"
                  date="2025-05-02"
                  image={{
                    url: '/assets/images/news-image-2.jpg',
                    title: 'Varamenn taka sæti',
                  }}
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
          title={'Valmynd'}
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
                <Text variant="small" color="blue400">
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
            heading="Umferðarlög (endurmenntun atvinnubílstjóra)"
            renderHeading={(heading) => (
              <Box display="flex" alignItems="center" columnGap={2}>
                <Icon icon="document" type="outline" color="blue400" />
                {heading}
              </Box>
            )}
            text="Þorgrímur Sigmundsson"
            date="7. maí 2025"
            eyebrow="Málsnúmer 358"
            cta={{
              label: 'Skoða frumvarp',
              variant: 'text',
            }}
            tag={{
              label: 'Samgöngur',
              variant: 'blue',
              // renderTag: (cld) => (
              //   <Box display="flex" alignItems="center" columnGap={1}>
              //     {cld}
              //     <Tag outlined variant="blue">
              //       Fjölskyldumál
              //     </Tag>
              //     <Tag outlined variant="blue">
              //       Börn
              //     </Tag>
              //   </Box>
              // ),
            }}
          />
          <ActionCard
            heading="Réttindi og skyldur starfsmanna ríkisins (hækkun starfslokaaldurs)"
            renderHeading={(heading) => (
              <Box display="flex" alignItems="center" columnGap={2}>
                <Icon icon="document" type="outline" color="blue400" />
                {heading}
              </Box>
            )}
            text="Þorsteinn B. Sæmundsson"
            date="5. maí 2025"
            eyebrow="Málsnúmer 352"
            cta={{
              label: 'Skoða frumvarp',
              variant: 'text',
            }}
            tag={{
              label: 'Ríkisstarfsmenn',
              variant: 'blue',
            }}
          />
          <ActionCard
            heading="Veiðigjald (aflaverðmæti í reiknistofni)"
            renderHeading={(heading) => (
              <Box display="flex" alignItems="center" columnGap={2}>
                <Icon icon="document" type="outline" color="blue400" />
                {heading}
              </Box>
            )}
            text="Hanna Katrín Friðriksson"
            date="30. apríl 2025"
            eyebrow="Málsnúmer 351"
            cta={{
              label: 'Skoða frumvarp',
              variant: 'text',
            }}
            tag={{
              label: 'Fiskveiði',
              variant: 'blue',
            }}
          />
        </Stack>
      </Box>

      <Box paddingBottom={[5, 5, 5]}>
        <Text variant="h2" as="h2" paddingTop={[4, 4, 4]} paddingBottom={4}>
          Flýtitenglar
        </Text>
        <Columns space={[2, 2, 3, 3]} collapseBelow="lg">
          <Column>
            <CategoryCard
              heading="Viltu hafa áhrif á löggjöfina?"
              text="Öllum er frjálst að senda skriflega umsögn um þingmál til nefnda og einnig er bent á Samráðsgáttina sem auðveldar almenningi að taka þátt í ákvörðunartöku opinberra aðila."
              icon={<Icon icon={'school'} type={'outline'} color={'blue400'} />}
            />
          </Column>
          <Column>
            <CategoryCard
              heading="Viltu kynna þér þingmennina?"
              text="Í gegnum yfirlit yfir þingmenn allra flokka er hægt að lesa bakgrunnsupplýsingar þeirra og sjá hver helstu baráttumál þeirra eru og hvernig þeir beita sér fyrir þeim."
              icon={<Icon icon={'person'} type={'outline'} color={'blue400'} />}
            />
          </Column>
        </Columns>
      </Box>
    </DefaultLayout>
  )
}

export default LandingPage
