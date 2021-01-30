import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", label: 'Lorem ipsum' },
  { value: "Byju’s is an Indian educational technology and online tutoring firm founded in 2011 by Byju Raveendran. The company with a valuation of $11.1 billion, is a leading market player with highest market share in India's growing EdTech space.Byju Raveendran (born 1981)[2] is an Indian entrepreneur who is the founder of BYJU’s.[3] He founded BYJU’s in 2011. he has a net worth of 1.9 B.[4][failed verification][5] He is currently in the list of top 100 billionaires of India and has a ranking of 72nd.[citation needed] He started byjus tablet in 2012 and further releasing his app in 2015 which got 2 million users in first 2 months of release. He was named to Fortune Magazine's 2020 '40 Under 40' list under the technology category", label: "BYJU'S" },
];

export default class Home extends Component {
    state = {
        selectedOptions: [],
      }


      handleChange = (selectedOptions) => {
        this.setState({ selectedOptions });
      }


    render() {
        const { selectedOptions } = this.state;

    return (
      <React.Fragment>
          
        <Select  className=" col-md-3 mt-5 px-5 pt-5"
          isMulti
          value={selectedOptions}
          onChange={this.handleChange}
          options={options}
        />
      {selectedOptions.map(o => <p className="p-5">{o.value}</p>)}
      </React.Fragment>
        )
    }
}
