/* eslint-disable @nx/enforce-module-boundaries */
import {
  Footer,
  Text,
  FormStepperV2,
  Section,
  FormStepperThemes,
} from '@island.is/island-ui/core'

// web imports
import { SubpageLayout } from '@island.is/web/screens/Layouts/Layouts'
import { SidebarLayout } from '@island.is/web/screens/Layouts/SidebarLayout'
import {
  SubpageDetailsContent,
  SubpageMainContent,
  DefaultHeader,
} from '@island.is/web/components'
import { useNamespace } from '@island.is/web/hooks'

import * as styles from './DefaultLayout.css'

const BillProgress = () => {
  return (
    <FormStepperV2
      sections={[
        <Section
          sectionIndex={0}
          isComplete
          section="Section #1"
          theme={FormStepperThemes.PURPLE}
        />,
        <Section
          sectionIndex={1}
          isActive
          section="Section #2"
          theme={FormStepperThemes.PURPLE}
        />,
        <Section
          sectionIndex={2}
          section="Section #3"
          theme={FormStepperThemes.BLUE}
        />,
        <Section sectionIndex={3} section="Section #4" />,
        <Section
          sectionIndex={4}
          section="Section #5"
          theme={FormStepperThemes.PURPLE}
        />,
      ]}
    />
  )
}

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className={styles.container}>
    <>
      <DefaultHeader
        title="Test DefaultHeader"
        background="url(https://images.ctfassets.net/8k0h54kbe6bj/26GpjBNZtKP3FVYlnqplLz/cdf4ec749375332fc3ff40fe8894ca9b/Artboard_1_1.svg)"
        // mobileBackground="red"
        titleColor="white"
        fullWidth={true}
        // image="https://images.ctfassets.net/8k0h54kbe6bj/26GpjBNZtKP3FVYlnqplLz/cdf4ec749375332fc3ff40fe8894ca9b/Artboard_1_1.svg"
        // imageIsFullHeight={true}
        // imageObjectFit="cover"
        // imageObjectPosition="center"
        // imagePadding="0"
        titleSectionPaddingLeft={0}
        logo="https://images.ctfassets.net/8k0h54kbe6bj/7yEWHxuf2kBEhfQhoL6idD/c78ddc917db536f6d4cc7557c7895866/thjodskjalasafn-logo.svg"
        logoHref="#"
        // titleClassName={null}
        isSubpage={false} // controls height
      />
      <SubpageLayout
        main={
          <>
            <SidebarLayout
              sidebarContent={<div>Sticky Sidebar</div>}
              isSticky={true}
            >
              <SubpageMainContent main={children} image={<BillProgress />} />
            </SidebarLayout>
          </>
        }
        details={
          <SubpageDetailsContent
            header={
              <Text variant="h2" color="blue600">
                Details Header
              </Text>
            }
            content={children}
          ></SubpageDetailsContent>
        }
      />
      <Footer showMiddleLinks={false} />
    </>
  )
}

export default DefaultLayout
