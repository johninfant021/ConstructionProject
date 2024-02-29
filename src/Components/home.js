import "./home.css";
import img1 from "./home_img/h.jpg";
import img2 from "./home_img/h1.jpg";
import img3 from "./home_img/hr.jpg";

function Home() {
  return (
    <>
      <main>
        <header className="heading">
          <p className="title">
            Tracking real-time building construction expenses involves
            monitoring various costs associated with the construction process.
            The expenses can be categorized into several key components:
          </p>
          <div className="image_format">
            <img src={img1} alt="image" className="img" />
            <img src={img2} alt="image" className="img" />
            <img src={img3} alt="image" className="img" />
          </div>
        </header>

        <div className="con">
          <ul className="list1">
            <p className="con_head">Materials Costs:</p>
            <li>
              Keep track of the costs of all materials required for
              construction, including lumber, concrete, steel, bricks, roofing
              materials, insulation, etc.
            </li>
            <li>
              Monitor market prices for fluctuations that may impact material
              costs.
            </li>
          </ul>

          <ul>
            <p className="con_head">Utilities::</p>
            <li>
              Estimate and track costs for temporary utilities required during
              construction, such as electricity, water, and sewage.
            </li>
          </ul>

          <ul>
            <p className="con_head">Labor Costs:</p>
            <li>
              Track labor expenses, including wages, benefits, and any overtime.
            </li>
            <li>
              Monitor market prices for fluctuations that may impact material
              costs.
            </li>
            <li>
              Monitor productivity and efficiency to optimize labor costs.
            </li>
          </ul>

          <ul>
            <p className="con_head">Equipment Costs:</p>
            <li>
              Include expenses related to renting or purchasing construction
              equipment.
            </li>
            <li>
              Consider fuel, maintenance, and depreciation costs for owned
              equipment.
            </li>
          </ul>

          <ul>
            <p className="con_head">Permits and Fees:</p>
            <li>
              Include costs associated with obtaining necessary permits and
              paying required fees to regulatory authorities.
            </li>
          </ul>

          <ul>
            <p className="con_head">Professional Services:</p>
            <li>Budget for architectural, engineering, and design services.</li>
            <li>
              Account for any consulting fees or legal services related to the
              project.
            </li>
          </ul>

          <ul>
            <p className="con_head">Insurance:</p>
            <li>
              Ensure that insurance costs for the construction project are
              accounted for, including liability insurance and builder's risk
              insurance.
            </li>
          </ul>

          <ul>
            <p className="con_head">Contingency:</p>
            <li>
              Allocate a contingency fund for unexpected expenses or changes in
              the project scope.
            </li>
          </ul>

          <ul>
            <p className="con_head">Project Management Costs:</p>
            <li>
              Include costs associated with project management, such as
              software, administrative expenses, and any additional personnel.
            </li>
          </ul>

          <ul>
            <p className="con_head">Land Acquisition Costs:</p>
            <li>
              If applicable, include expenses related to purchasing or leasing
              the land for the construction project.
            </li>
          </ul>

          <ul>
            <p className="con_head">Financing Costs:</p>
            <li>
              Account for interest on construction loans, as well as any other
              financing-related expenses.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
export default Home;
