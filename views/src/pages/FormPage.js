import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const FormPage = () => {
  return (
    <div className="relative bg-cdcfib-career-new-account-1583x759-dark-nero w-full h-[1024px] overflow-hidden text-left text-sm text-cdcfib-career-new-account-1583x759-dark-oxford-blue font-segoe-ui">
      <div className="absolute w-[calc(100%_-_809.3px)] top-[336px] right-[404.3px] left-[405px] h-[586px]">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
          <div className="self-stretch w-[199.6px] flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[125.55999755859375px] pl-0">
              <div className="relative leading-[20px] inline-block max-w-[199.55999755859375px]">
                <span>{`First name `}</span>
                <span className="text-cdcfib-career-new-account-1583x759-dark-flamingo">
                  *
                </span>
              </div>
            </div>
            <Form className="[border:none] bg-[transparent] self-stretch relative">
              <Form.Control type="text" />
            </Form>
          </div>
          <div className="self-stretch w-[199.6px] flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[117.55999755859375px] pl-0">
              <div className="relative leading-[20px] inline-block max-w-[199.55999755859375px]">
                Middle name
              </div>
            </div>
            <Form className="[border:none] bg-[transparent] self-stretch relative">
              <Form.Control type="text" />
            </Form>
          </div>
          <div className="self-stretch w-[199.6px] flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[126.58000183105469px] pl-0">
              <div className="relative leading-[20px] inline-block max-w-[199.5800018310547px]">
                <span>{`Last name `}</span>
                <span className="text-cdcfib-career-new-account-1583x759-dark-flamingo">
                  *
                </span>
              </div>
            </div>
            <Form className="[border:none] bg-[transparent] self-stretch relative">
              <Form.Control type="text" />
            </Form>
          </div>
        </div>
        <Form.Select
          className="w-full absolute top-[82px] right-[0px] left-[0px] font-segoe-ui text-[16px] text-black"
          value="Choose"
        >
          <option>Position you are applying for *</option>
        </Form.Select>
        <div className="absolute w-full top-[148px] right-[0px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
          <div className="w-[415.1px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
            <div className="self-stretch relative h-[94px]">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[366.1300048828125px] pl-0 box-border">
                <div className="relative leading-[20px] inline-block max-w-[415.1300048828125px]">
                  <span>{`E-mail `}</span>
                  <span className="text-cdcfib-career-new-account-1583x759-dark-flamingo">
                    *
                  </span>
                </div>
              </div>
              <Form className="w-full [border:none] bg-[transparent] absolute top-[24px] right-[0px] left-[0px]">
                <Form.Control type="text" />
              </Form>
              <div className="absolute top-[74px] left-[0px] text-[12px] leading-[16px] font-semibold text-cdcfib-career-new-account-1583x759-dark-thunderbird">
                Please use your personal and valid e-mail to avoid being
                excluded.
              </div>
            </div>
          </div>
          <div className="w-[199.6px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-[4px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[97.58000183105469px] pl-0">
                <div className="relative leading-[20px] inline-block max-w-[199.5800018310547px]">
                  <span>{`Phone number `}</span>
                  <span className="text-cdcfib-career-new-account-1583x759-dark-flamingo">
                    *
                  </span>
                </div>
              </div>
              <Form className="[border:none] bg-[transparent] self-stretch relative">
                <Form.Control type="text" />
              </Form>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[258px] right-[0px] left-[0px] flex flex-row items-start justify-start py-0 pr-[0.000030517578125px] pl-0 box-border gap-[16px]">
          <div className="w-[307.3px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[239.33999633789062px] pl-0">
                <div className="relative leading-[20px] inline-block max-w-[307.3399963378906px]">
                  <span>{`Address `}</span>
                  <span className="text-cdcfib-career-new-account-1583x759-dark-flamingo">
                    *
                  </span>
                </div>
              </div>
              <Form className="[border:none] bg-[transparent] self-stretch relative">
                <Form.Control type="text" />
              </Form>
            </div>
          </div>
          <div className="w-[307.4px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[186.3599853515625px] pl-0">
                <div className="relative leading-[20px] inline-block max-w-[307.3599853515625px]">
                  <span>{`Bank Name `}</span>
                  <span className="text-cdcfib-career-new-account-1583x759-dark-flamingo">
                    *
                  </span>
                </div>
              </div>
              <Form className="[border:none] bg-[transparent] self-stretch relative">
                <Form.Control type="text" />
              </Form>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[356px] right-[0px] left-[0px] flex flex-col items-start justify-start text-cdcfib-career-new-account-1583x759-dark-salem">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[341.70001220703125px] pl-0">
            <div className="relative leading-[20px] inline-block max-w-[630.7000122070312px]">
              Please use a password with the following rules:
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-cdcfib-career-new-account-1583x759-dark-diesel">
            <div className="self-stretch flex flex-row items-start justify-start py-1 pr-[314.9000244140625px] pl-3">
              <div className="self-stretch shrink-0 flex flex-col items-start justify-start py-0 pr-[6.79998779296875px] pl-0">
                <div className="relative leading-[20px]">
                  - At least 1 UPPER CASE/CAPITAL LETTER (e.g A)
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[5px] pb-1 pr-[361.9300231933594px] pl-3 border-t-[1px] border-solid border-cdcfib-career-new-account-1583x759-dark-athens-gray">
              <div className="self-stretch shrink-0 flex flex-col items-start justify-start py-0 pr-[5.769989013671875px] pl-0">
                <div className="relative leading-[20px]">
                  - At least 1 lower case/small letter (e.g a)
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[5px] pb-1 pr-[454.20001220703125px] pl-3 border-t-[1px] border-solid border-cdcfib-career-new-account-1583x759-dark-athens-gray">
              <div className="self-stretch shrink-0 flex flex-col items-start justify-start py-0 pr-[2.5px] pl-0">
                <div className="relative leading-[20px]">
                  - At least 1 number (e.g 4)
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[5px] pb-1 pr-[398.1199951171875px] pl-3 border-t-[1px] border-solid border-cdcfib-career-new-account-1583x759-dark-athens-gray">
              <div className="self-stretch shrink-0 flex flex-col items-start justify-start py-0 pr-[3.5800018310546875px] pl-0">
                <div className="relative leading-[20px]">
                  - At least 1 special character (e.g #)
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[5px] pb-1 pr-[448.82000732421875px] pl-3 border-t-[1px] border-solid border-cdcfib-career-new-account-1583x759-dark-athens-gray">
              <div className="self-stretch shrink-0 flex flex-col items-start justify-start py-0 pr-[3.8800048828125px] pl-0">
                <div className="relative leading-[20px]">
                  - At least 6 characters long
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[536px] right-[0px] left-[0px] flex flex-row items-center justify-between text-[14.4px] text-cdcfib-career-new-account-1583x759-dark-flamingo">
          <div className="relative w-[134.4px] h-[29px]">
            <b className="absolute top-[1px] left-[0px] leading-[28px]">*</b>
            <b className="absolute top-[0px] left-[6.6px] text-[18px] leading-[28px] text-cdcfib-career-new-account-1583x759-dark-pale-sky">
              {" "}
              required fields
            </b>
          </div>
          <Button variant="primary" href="/landing-page">
            Apply
          </Button>
        </div>
      </div>
      <header
        className="absolute w-[calc(100%_+_143px)] top-[0px] right-[-119px] left-[-24px] bg-cdcfib-career-new-account-1583x759-dark-alizarin-crimson h-32 overflow-hidden"
        id="header"
      >
        <div className="absolute h-full w-full top-[0px] right-[0%] bottom-[0px] left-[0%] overflow-hidden">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start">
            <div className="self-stretch relative bg-cdcfib-career-new-account-1583x759-dark-burnt-sienna w-[791.5px]" />
            <div className="self-stretch relative bg-cdcfib-career-new-account-1583x759-dark-alizarin-crimson w-[791.5px]" />
          </div>
          <div className="absolute w-full top-[0px] right-[83.5px] left-[-83.5px] h-[308px] flex flex-row items-start justify-center">
            <img
              className="self-stretch relative max-h-full w-[1750px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/svg@2x.png"
            />
          </div>
        </div>
      </header>
      <img
        className="absolute top-[91px] left-[444px] w-[529px] h-48 object-cover"
        alt=""
        src="/f1f78bade4684b70b7b5ec9c5fa557d2-1@2x.png"
      />
    </div>
  );
};

export default FormPage;
