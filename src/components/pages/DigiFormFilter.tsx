import { DigiButton, DigiCode, DigiFormFilter, DigiFormInput, DigiLayoutBlock, DigiTypographyHeadingJumbo } from "@digi/arbetsformedlingen-react";
import { IFormFilterItem } from "@digi/arbetsformedlingen/dist/types/components";
import { useState } from "react";

const initList: IFormFilterItem[] = [
  {
    label: "Job-seeker",
    value: "job-seeker"
  },
  {
    selected: true,
    label: "Employer",
    value: "employer"
  },
  {
    label: "Student",
    value: "student"
  }
]

const newList: IFormFilterItem[] = [
  {
    selected: false,
    label: "Job-seeker",
    value: "job-seeker"
  },
  {
    selected: true,
    label: "Student",
    value: "student"
  }
]

const SlotBug = () => {

  const [inputText, setinputText] = useState("")
  const [checkboxItems, setcheckboxItems] = useState([...initList])

  return (
    <>
      <DigiLayoutBlock afVerticalPadding>
        <DigiTypographyHeadingJumbo afText="Digi-form-filter" />
        <p>Test of <DigiCode afCode="<digi-form-filter>" /> using new dynamic import of values with the attribute <DigiCode afCode="afListItems" /></p>
        <pre>
          {checkboxItems.map((checkbox, index) => {
            return <span key={checkbox.value}>{index === 0 ? null : ', '}{checkbox.label} ({checkbox.selected ? 'true' : 'false'})</span>
          })}
        </pre>
      </DigiLayoutBlock>
      <DigiLayoutBlock>
        <DigiFormInput
          afLabel="New item"
          afName="newItem"
          onAfOnInput={(e) => setinputText(e.detail.target.value)}
        />
        <div style={{
          'display': 'flex',
          'gap': 'var(--digi--gutter--medium)',
          'marginBlock': 'var(--digi--margin--medium)'
        }}>
          <DigiButton
            afVariation="primary"
            onAfOnClick={() => {
              if(inputText == '')
                return

              setcheckboxItems([
                ...checkboxItems,
                {
                  label: inputText,
                  value: inputText.toLowerCase().replace(" ", "-")
                }
              ])
            }}
          >Add item</DigiButton>
          <DigiButton
            afVariation="primary"
            onAfOnClick={() => {
              setcheckboxItems([
                ...checkboxItems.slice(0, -1)
              ])
            }}
          >Delete last item</DigiButton>
          <DigiButton
            afVariation="primary"
            onAfOnClick={() => {
              setcheckboxItems([
                ...newList
              ])
            }}
            style={{
              'marginInlineStart': 'var(--digi--margin--large)'
            }}
          >Add new values (newList: IFormFilterItem[])</DigiButton>
        </div>



        <DigiFormFilter
          afFilterButtonText="Professional area"
          afSubmitButtonText="Filter"
          afListItems={checkboxItems}
        />

      </DigiLayoutBlock>
    </>
  );
}

export default SlotBug;