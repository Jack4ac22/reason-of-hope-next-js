import InfoBox from "./info-box";

export default function InfoBoxes() {
  return (
    <>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox
              heading="For Translators"
              backgroundColor="bg-gray-100"
              buttonInfo={
                {
                  text: 'Get Started',
                  link: '/translations',
                  backgroundColor: 'bg-gray-900'
                }
              }
            >
              Put your Languages Talents into the vinyard of Gift Giver.
            </InfoBox>

            <InfoBox
              heading="For Proofreaders"
              backgroundColor="bg-blue-100"
              buttonInfo={
                {
                  text: 'Proofread',
                  link: '/translations/proofread',
                  backgroundColor: 'bg-blue-500'
                }
              }
            >
              Proofread the translations and make them perfect.
              
            </InfoBox>

          </div>
        </div>
      </section>
    </>
  )
}