/* eslint-disable @nx/enforce-module-boundaries */
import { Link } from 'react-router-dom'

import {
  Box,
  AsyncSearch,
  AsyncSearchOption,
  Text,
  Navigation,
  Breadcrumbs,
  Filter,
  FilterMultiChoice,
  Column,
  Columns,
  Icon,
  Tabs,
  Stack,
  BulletList,
  Bullet,
  ActionCard,
  Tag,
  Hidden,
  Link as IslandLink,
} from '@island.is/island-ui/core'

import Webreader from '../components/Webreader'
import DefaultLayout from '../layouts/DefaultLayout'

import * as styles from './MemberDetailPage.css'

const sidebarLinks = [
  {
    href: '#',
    title: 'Forsíða',
  },
  {
    href: '#',
    title: 'Þingmál',
  },
  {
    href: '/members',
    title: 'Þingmenn',
    active: true,
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

const categories = [
  {
    id: 'type',
    label: 'Type',
    selected: [],
    filters: [
      {
        value: 'bills',
        label: 'Bills',
      },
      {
        value: 'docs',
        label: 'Documents',
      },
    ],
  },
]

const content1 = (
  <Box paddingY={6}>
    <Stack space="gutter">
      <Text variant="h3">Embætti og nefndir</Text>
      <Text variant="default" as="div">
        <BulletList color="dark400">
          <Bullet>Forsætisráðherra síðan 21. desember 2024.</Bullet>
          <Bullet>
            Formaður <a href="#">Samfylkingarinnar</a> síðan 2022.
          </Bullet>
          <Bullet>
            Alþingismaður <a href="#">Reykjavíkurkjördæmis suður</a> síðan 2021
            (Samfylkingin).
          </Bullet>
        </BulletList>
      </Text>
      <Text variant="h3" paddingTop={3}>
        Æviágrip
      </Text>
      <Text variant="default" as="p">
        Fædd í Reykjavík 12. maí 1988. Foreldrar: Frosti Fífill Jóhannsson
        (fæddur 27. apríl 1952) þjóðháttafræðingur og Steinunn Guðný H.
        Jónsdóttir (fædd 18. september 1956) læknir. Maki: Einar Bergur
        Ingvarsson (fæddur 4. maí 1983) viðskiptafræðingur. Foreldrar: Ingvar
        Einarsson og Ragnhildur Jónsdóttir. Dóttir: María Herdís (2019).
      </Text>
      <Text variant="default" as="p">
        Stúdentspróf MR 2008. BS-próf í hagfræði HÍ 2011. MA-próf í hagfræði frá
        Boston-háskóla 2014. MA-próf í alþjóðafræði með áherslu á hagstjórn og
        alþjóðafjármál frá Yale-háskóla 2016.
      </Text>
      <Text variant="default" as="p">
        Starf meðfram hagfræðinámi á skrifstofu seðlabankastjóra 2009–2010.
        Hagfræðingur í greiningardeild Arion banka 2011–2012. Blaðamaður á
        Viðskiptablaðinu 2013–2014. Hagfræðingur í vinnuhópi á vegum
        forsætisráðuneytis 2014. Sérfræðingur í greiningardeild
        fjárfestingarbankans Morgan Stanley í New York og Lundúnum 2015–2017.
        Hagfræðingur Viðskiptaráðs Íslands 2017. Formaður verðlagsnefndar búvara
        í atvinnumálaráðuneyti 2017–2018. Aðjúnkt við hagfræðideild HÍ
        2018–2020. Aðalhagfræðingur Kviku banka hf. 2018–2021. Forsætisráðherra
        síðan 21. desember 2024.
      </Text>
      <Text variant="default" as="p">
        Formaður Samfylkingarinnar síðan 2022.
      </Text>
      <Text variant="default" as="p">
        Alþingismaður Reykjavíkurkjördæmis suður síðan 2021 (Samfylkingin).
      </Text>
      <Text variant="default" as="p">
        Forsætisráðherra síðan 2024.
      </Text>
      <Text variant="default" as="p">
        Fjárlaganefnd 2021–2023, efnahags- og viðskiptanefnd 2023, fjárlaganefnd
        2023–2024.
      </Text>
      <Text variant="default" as="p">
        Íslandsdeild Vestnorræna ráðsins 2021–2023.
      </Text>
      <Text variant="default" as="p">
        <i>Biography last edited on December 21, 2024.</i>
      </Text>
    </Stack>
  </Box>
)
const content2 = (
  <Box paddingY={6}>
    <Stack space={3}>
      <Columns space={[2, 2, 3, 3]}>
        <Column width="9/12">
          <AsyncSearch
            filter
            colored
            // onInputValueChange={(value) => {}}
            options={[
              {
                label: 'General Penal Code',
                value: 'general-penal-code',
              },
              {
                label: 'Maternity and parental leave',
                value: 'maternity-and-parental-leave',
              },
              {
                label: 'Preschool enrollment',
                value: 'preschool-enrollment',
              },
            ]}
            placeholder="Leit að frumvörpum Kristrúnar"
            size="medium"
          />
        </Column>
        <Column width="3/12">
          <Filter
            align="right"
            labelClearAll={'Clear filter'}
            labelClear={'Clear1'}
            labelOpen={'Síur'}
            // labelClose={loc.filter.labelClose}
            // labelTitle={loc.filter.labelTitle}
            // labelResult={loc.filter.labelResult}
            onFilterClear={() => null}
            variant="popover"
            resultCount={10}
          >
            <FilterMultiChoice
              labelClear="Hreinsa val"
              categories={categories}
              onChange={(event) => {
                console.log(event)
                // setFilter({
                //   ...filter,
                //   [event.categoryId]: event.selected,
                // })
              }}
              onClear={(categoryId) => {
                // setFilter({
                //   ...filter,
                //   [categoryId]: [],
                // })
              }}
            />
          </Filter>
        </Column>
      </Columns>

      <ActionCard
        heading="General Criminal Code"
        renderHeading={(heading) => (
          <Box display="flex" alignItems="center" columnGap={2}>
            <Icon icon="document" type="outline" color="blue400" />
            {heading}
          </Box>
        )}
        text="Reintroduced · First reading"
        date="17. júní 1944"
        eyebrow="Málsnúmer 358"
        cta={{
          label: 'Skoða frumvarp',
          variant: 'text',
        }}
        tag={{
          label: 'Personal rights',
          variant: 'blue',
          renderTag: (cld) => (
            <Box display="flex" alignItems="center" columnGap={1}>
              {cld}
              <Tag outlined variant="blue">
                Courts and Legal Process
              </Tag>
            </Box>
          ),
        }}
        progressMeter={{
          currentProgress: 33,
          maxProgress: 100,
          withLabel: false,
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
        text="Introduced · Expired"
        date="17. október 2024"
        eyebrow="Málsnúmer 225"
        cta={{
          label: 'Skoða frumvarp',
          variant: 'text',
        }}
        tag={{
          label: 'Equality',
          variant: 'blue',
          renderTag: (cld) => (
            <Box display="flex" alignItems="center" columnGap={1}>
              {cld}
              <Tag outlined variant="blue">
                Business
              </Tag>
              <Tag outlined variant="blue">
                Procurement
              </Tag>
            </Box>
          ),
        }}
        progressMeter={{
          currentProgress: 12,
          maxProgress: 100,
          withLabel: false,
          variant: 'rose',
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
        text="Introduced · Expired"
        date="17. september 2024"
        eyebrow="Málsnúmer 290"
        cta={{
          label: 'Skoða frumvarp',
          variant: 'text',
        }}
        tag={{
          label: 'Children',
          variant: 'blue',
          renderTag: (cld) => (
            <Box display="flex" alignItems="center" columnGap={1}>
              {cld}
              <Tag outlined variant="blue">
                Family matters
              </Tag>
              <Tag outlined variant="blue">
                Kindergardens
              </Tag>
            </Box>
          ),
        }}
        progressMeter={{
          currentProgress: 66,
          maxProgress: 100,
          withLabel: false,
          variant: 'rose',
        }}
      />
    </Stack>
  </Box>
)
const content3 = (
  <Box paddingY={6}>
    <Stack space="gutter">
      <Text variant="default">Placeholder</Text>
      <Text variant="default" as="p">
        Tab content
      </Text>
    </Stack>
  </Box>
)
const tabs = [
  {
    label: 'Æviágrip',
    content: content1,
  },
  { label: 'Frumvörp (3)', content: content2 },
  { label: 'Ræður (4)', content: content3 },
  { label: 'Atkvæði (125)', content: content3 },
  { label: 'Þingstörf', content: content3 },
  { label: 'Hagsmunaskrá', content: content3 },
]

const MemberDetailPage = () => {
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
    >
      <Webreader marginTop={[5, 5, 0]} marginBottom={5} readClass="rs_read" />

      <Box
        paddingBottom={[2, 2, 6]}
        display={['none', 'none', 'block']}
        printHidden
      >
        <Breadcrumbs
          // tagVariant=""
          items={[
            {
              title: 'Ísland.is',
              href: '/',
            },
            {
              title: 'Alþingi',
              href: '/',
            },
            {
              title: 'Þingmenn',
              href: '/members',
              // isCurrentPage: true,
              // isTag: true,
            },
          ]}
        />
      </Box>

      <Box display={['block', 'block', 'none']} paddingBottom={[5, 5, 0]}>
        <Navigation
          baseId="mobileNav"
          colorScheme="blue"
          isMenuDialog
          renderLink={(link) => {
            return <Link to={link.props.href}>{link}</Link>
          }}
          items={sidebarLinks}
          title={'Alþingi'}
          activeItemTitle={'Members of Parliament'}
        />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        // columnGap={5}
        paddingBottom={[5, 5, 10]}
      >
        <Box flexShrink={0} minWidth={0}>
          <Hidden below="md">
            <Box paddingRight={5}>
              <img
                src="/assets/images/member-pm.jpg"
                alt="Kristrún Frostadóttir"
                width={'120'}
                height={'120'}
              />
            </Box>
          </Hidden>
        </Box>
        <Box>
          <Hidden above="sm">
            <Box paddingBottom={3}>
              <img
                src="/assets/images/member-pm.jpg"
                alt="Kristrún Frostadóttir"
                width={'120'}
                height={'120'}
              />
            </Box>
          </Hidden>
          <Text
            variant="medium"
            as="p"
            paddingTop={[0, 0, 0]}
            paddingBottom={0}
          >
            1. þm. Reykv. s.
          </Text>
          <Text variant="h1" as="h1" paddingTop={[0, 0, 0]} paddingBottom={3}>
            Kristrún Frostadóttir
          </Text>
          <Text as="p">
            Kristrún Frostadóttir er forsætisráðherra síðan 2024 og
            Alþingismaður fyrir Reykjavíkurkjördæmi suður síðan 2021.
          </Text>
        </Box>
      </Box>

      <Box paddingBottom={[5, 5, 10]}>
        <Columns space={[2, 2, 3, 3]} collapseBelow="lg">
          <Column width="content">
            <Box className={styles.card}>
              <Box padding={3} className={styles.cardHeader}>
                <Text variant="h5" as="h2">
                  Upplýsingar
                </Text>
              </Box>
              <Box padding={3}>
                <Columns space={[2, 2, 2, 1, 2]}>
                  <Column width="content">
                    <Stack space={2}>
                      <Text variant="eyebrow">Embætti</Text>
                      <Text variant="eyebrow">Ráðuneyti</Text>
                      <Text variant="eyebrow">Tölvupóstfang</Text>
                      <Text variant="eyebrow">Samfélagsmiðlar</Text>
                    </Stack>
                  </Column>
                  <Column width="content">
                    <Stack space={2}>
                      <Text variant="small">Forsætisráðherra</Text>

                      <Text variant="small" color="blue400">
                        <IslandLink href="#">Forsætisráðneyti</IslandLink>
                      </Text>
                      <Text variant="small" color="blue400">
                        <IslandLink href="mailto:kristrun.frostadottir@althingi.is">
                          kristrun.frostadottir@althingi.is
                        </IslandLink>
                      </Text>
                      <img
                        src="/assets/images/social-mockup.png"
                        alt="Social links mockup"
                        style={{ height: '16px' }}
                      />
                    </Stack>
                  </Column>
                </Columns>
              </Box>
            </Box>
          </Column>
          <Column>
            <div data-david className={styles.cardHeightWrapper}>
              <Columns space={[2, 2, 3, 3]} collapseBelow="sm">
                <Column>
                  <Box className={styles.card}>
                    <Box padding={3} className={styles.cardHeader}>
                      <Text variant="h5" as="h2">
                        Kjördæmi
                      </Text>
                    </Box>
                    <Box padding={3} className={styles.cardContent}>
                      <div className={styles.cardImage}>
                        <img
                          src="/assets/images/member-map.png"
                          alt="Reykv. n"
                        />
                      </div>
                      <Text variant="small">
                        <IslandLink href="#">
                          Reykjavíkurkjördæmi suður
                        </IslandLink>
                      </Text>
                    </Box>
                  </Box>
                </Column>
                <Column>
                  <Box className={styles.card}>
                    <Box padding={3} className={styles.cardHeader}>
                      <Text variant="h5" as="h2">
                        Þingflokkur
                      </Text>
                    </Box>
                    <Box padding={3} className={styles.cardContent}>
                      <div className={styles.cardImage}>
                        <img
                          src="/assets/images/member-party.png"
                          alt="Samfylkingin"
                          style={{ width: '50%' }}
                        />
                      </div>
                      <Text variant="small">
                        <IslandLink href="#">Samfylkingin</IslandLink>
                      </Text>
                    </Box>
                  </Box>
                </Column>
              </Columns>
            </div>
          </Column>
        </Columns>
      </Box>

      <Box paddingBottom={[5, 5, 10]}>
        <Tabs
          label=""
          tabs={tabs}
          contentBackground="transparent"
          variant="alternative"
          size="xs"
        />
      </Box>
    </DefaultLayout>
  )
}

export default MemberDetailPage
