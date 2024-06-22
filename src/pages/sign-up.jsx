import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxCaretDown } from "react-icons/rx"
import { useDispatch } from "react-redux";
import { register } from "@/Features/User/UserSlice";

import toast, { Toaster } from 'react-hot-toast';


export function SignUp() {

  const dispatch = useDispatch();
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [zone, setZone] = useState('');
  const [subZone, setSubZone] = useState('');
  const [terms, setTerms] = useState(true);
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');

  const selectedZoneObj = sub.find(sz => sz.zone === zone);

  const data = {
    "name": name,
    "email": email,
    "number": number,
    "state": state,
    "stateCode": stateCode,
    "zone": zone,
    "subZone": subZone,
    "password": password,
    "password_confirmation": confirmPassword
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name && !email && !number && !state && !stateCode && !zone && !subZone && !password && !confirmPassword) {
      toast.error('Provide all Information')
      return;
    } else if (!name) {
      toast.error('Provide Your Name');
      return;
    } else if (!email) {
      toast.error('Provide Your Email');
      return;
    } else if (!number) {
      toast.error('Provide your Phone NUmber')
      return;
    } else if (!state) {
      toast.error('Can you tell us what state you are from')
      return;
    } else if (!stateCode) {
      toast.error('Provide your State Code')
      return;
    } else if (!zone) {
      toast.error('Select your Zone')
      return;
    } else if (!subZone) {
      toast.error('Select your sub-zone')
      return;
    } else if (!password) {
      toast.error('Provide your Password')
      return;
    } else if (!confirmPassword) {
      toast.error('COnfirm Your Password')
      return;
    } else if (password !== confirmPassword) {
      toast.error("Your Password Don't match")
      return;
    }

    // const response = await fetch('http://localhost:8000/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data)
    // })

    // if (!response.ok) {
    //   throw new Error('Network response was not ok ' + response.statusText);
    // }

    // const result = await response.json();

    // console.log(result);

    fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error('Network response was not ok: ' + text);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });

    toast.success('Account Created Successfully')
  }

  return (
    <>
      <Toaster />

      <section className="flex items-center">
        <div className="w-2/5 h-full hidden lg:block p-10">
          <img
            src="/img/pattern.png"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
        <div className="mx-auto my-10" style={{
          maxWidth: '500px',
        }}>
          <h3 className="text-3xl mb-10 text-center">
            Create Account
          </h3>
          <form class="w-full max-w-lg" onSubmit={handleSubmit}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="jane123@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Password
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"  value={password} onChange={e => setPassword(e.target.value)}/>
                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  COnfirm Password
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  State
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" value={state} onChange={e => setState(e.target.value)} />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                  Code
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" value={stateCode} onChange={e => setStateCode(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Zone
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={zone} onChange={e => setZone(e.target.value)}>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Sub-ZOne
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={subZone} onChange={e => setSubZone(e.target.value)}>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="bg-black w-full text-white p-3 mt-4 rounded">Create Account</button>
          </form>
        </div>
      </section>
      {/* <section className="m-0 md:m-8 flex ">
        <div className="w-2/5 h-full hidden lg:block">
          <img
            src="/img/pattern.png"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
        <div className="w-full lg:w-[70%] flex flex-col items-center justify-center mt-5">
          <form method="POST" onSubmit={handleSubmit}>
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
                  value={name}
                  onChange={e => setName(e.target.value)}
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </div>

              <div className="mb-3 flex flex-col gap-6">
                <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                  Your Password
                </Typography>
                <Input
                  size="lg"
                  placeholder="Password"
                  type="password"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 inp"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 flex flex-col gap-6">
                <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                  Confirm Password
                </Typography>
                <Input
                  size="lg"
                  placeholder="COnfirm Password"
                  type="password"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 inp"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col md:flex-row w-full relative gap-5">
                <div className="mb-1 flex flex-col gap-6 w-[100%]">
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    State of Origin
                  </Typography>
                  <input type="text" className="border rounded h-11 px-3 !border-blue-gray-200 focus:!border-t-gray-900 w-[100%] input" value={state} onChange={e => setState(e.target.value)}
                  />

                </div>
                <div className="mb-1 flex flex-col gap-6 w-[100%]">
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    State Code
                  </Typography>
                  <input type="text" className="border rounded h-11 px-3 !border-blue-gray-200 focus:!border-t-gray-900 w-[100%] input"
                    value={stateCode}
                    onChange={e => setStateCode(e.target.value)}
                  />
                </div>
              </div>



              <span className="font-semibold block mt-5">Choose your Region:</span>
              <div className="zoneandsubzone flex flex-col gap-5">
                <div className="zone w-full">
                  <select
                    id="zone-select"
                    value={zone}
                    onChange={e => setZone(e.target.value)}
                    className="select w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  >
                    <option value="">Select a zone</option>
                    {sub.map((sz) => (
                      <option key={sz.zone} value={sz.zone}>{sz.zone}</option>
                    ))}
                  </select>
                </div>

                <div className="sub">
                  <div>
                    <label htmlFor="subzone-select" className="block text-sm font-medium text-gray-700">Choose a Subzone</label>
                    <select
                      id="subzone-select"
                      value={subZone}
                      onChange={e => setSubZone(e.target.value)}
                      className="select w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                      <option value="">Select a subzone</option>
                      {selectedZoneObj?.subzones.map((subzone) => (
                        <option key={subzone} value={subzone}>{subzone}</option>
                      ))}
                    </select>
                  </div>
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
                checked={terms}
              />
              <Button className="mt-6" fullWidth onClick={handleSubmit}>
                Register Now
              </Button>
            </div>
            <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
              <span className="tex">Already have an account?</span>

              <Link to="/sign-in" className="text-gray-900 ml-1 tex">Sign in</Link>
            </Typography>
          </form>
        </div>
      </section> */}
    </>
  );
}

export default SignUp;
