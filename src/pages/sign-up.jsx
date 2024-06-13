import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxCaretDown } from "react-icons/rx"


export function SignUp() {
  const sub = [
    {
      zone: 'Owerri Municipal',
      subzones: [
        'Umuguma',
        "EGBU",
        "Irete",
      ]
    },
    {
      zone: 'Owerri North',
      subzones: [
        'Ikeredu',
        "Mbatoli",
      ]
    },
    {
      zone: 'Owerri South',
      subzones: [
        'Ngorkpala',
        "Ulaku",
        "Obibi Ezeama",
        "Agbala",
      ]
    },
    {
      zone: 'Ohazi',
      subzones: [
        'Obinze',
        "Obosoma",
        "Egbema",
      ]
    },
    {
      zone: 'Nkwere',
      subzones: [
        'Nwageli',
        "Isu",
      ]
    },
    {
      zone: 'Orlu',
      subzones: [
        'Njaba',
        "Osu",
      ]
    },
    {
      zone: 'Ideato',
      subzones: [
        'Ideato North',
        'Ideato South',
      ]
    },
    {
      zone: 'Okigwe',
      subzones: [
        'Okigwe',
        'Onuimo',
      ]
    },
    {
      zone: 'Mbano',
      subzones: [
        'Ehime Mbano',
        'Isiala',
        'Ihitte Uboma',
      ]
    },
    {
      zone: 'Mbaise',
      subzones: [
        'Mbowu',
        'Ezenita',
        'Azu',
        'Arbor',
      ]
    },
    {
      zone: 'Oguta',
      subzones: [
        'Oru East',
        'Oru West',
        'Oguta',
        'Arbor',
      ]
    },
  ]

  const [show, setShow] = useState(false)

  const select = () => {
    let custom = document.querySelectorAll('.zone')
    custom.forEach(function (select) {
      let sel = select.querySelector('.select')
      let selspan = select.querySelector('.select span')
      let selitems = select.querySelector('.select-items')
      let opt = selitems.querySelectorAll('div')

      if (selitems.style.display === 'block') {
        selitems.style.display = 'none'
      } else {
        selitems.style.display = 'block'
      }
      opt.forEach(function (opti) {
        opti.addEventListener('click', () => {
          const sz = document.querySelector('.subselect span')
          sz.textContent = 'Choose a Subzone'
          selspan.textContent = opti.textContent
          selitems.style.display = "none"
          setShow(true)
        })
      })
      window.addEventListener('click', function (e) {
        if (!select.contains(e.target)) {
          selitems.style.display = 'none'
        }
      })
    })
  }

  const subzo = () => {
    let custom = document.querySelectorAll('.sub')
    custom.forEach(function (select) {
      let sel = select.querySelector('.subselect')
      let selspan = select.querySelector('.subselect span')
      let selitems = select.querySelector('.sub-items')
      let opit = selitems.querySelectorAll('div')
      opit.forEach((op) => {
        op.remove()
      })

      let el = document.querySelector('.select').textContent
      const ind = sub.findIndex((elem) => elem.zone == el)
      let suz = sub[ind].subzones
      suz.map((s) => {
        let div = document.createElement('div')
        div.textContent = s
        selitems.appendChild(div)
      })

      let opt = selitems.querySelectorAll('div')
      if (selitems.style.display === 'block') {
        selitems.style.display = 'none'
      } else {
        selitems.style.display = 'block'
      }
      opt.forEach(function (opti) {
        opti.addEventListener('click', () => {
          selspan.textContent = opti.textContent
          selitems.style.display = "none"
        })
      })
      window.addEventListener('click', function (e) {
        if (!select.contains(e.target)) {
          selitems.style.display = 'none'
        }
      })
    })
  }
  return (
    <section className="m-0 md:m-8 flex ">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-[70%] flex flex-col items-center justify-center mt-5">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to register.</Typography>
        </div>
        <div className="mt-8 mb-2 mx-auto w-[270px] md:w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-3 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Enter Your Name
            </Typography>
            <Input
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 inp"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-3 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 inp"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-3 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Phone number
            </Typography>
            <Input
              size="lg"
              placeholder=""
              type="tel"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 inp"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="state flex gap-2 w-full">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                State of Origin
              </Typography>
              <Input
                size="lg"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 inp"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                State Code
              </Typography>
              <Input
                size="lg"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 inp"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>



          <span className="font-semibold block mt-5">Choose your Region:</span>
          <div className="zoneandsubzone flex flex-col gap-5">
            <div className="zone w-full">
              <button onClick={() => select()} className="select w-full text-left px-3">
                <span>Choose a Zone</span>

                <RxCaretDown />
              </button>
              <div className="select-items border">
                {sub.map((sz) => (
                  <div className="">{sz.zone}</div>
                ))}
              </div>
            </div>

            <div className="sub">
              <button onClick={() => subzo()} disabled={show ? false : true} className="subselect w-full px-5 disabled:opacity-50">
                <span>Choose a Subzone</span>

                <RxCaretDown />
              </button>
              <div className="sub-items border"></div>
            </div>
          </div>


          <Checkbox
            className="inp"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                <span className="tex">I agree to the&nbsp;</span>

                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline tex"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register Now
          </Button>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            <span className="tex">Already have an account?</span>

            <Link to="/sign-in" className="text-gray-900 ml-1 tex">Sign in</Link>
          </Typography>
        </div>

      </div>
    </section>
  );
}

export default SignUp;
