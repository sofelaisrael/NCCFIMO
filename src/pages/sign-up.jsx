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
    name,
    email,
    number,
    state,
    stateCode,
    zone,
    subzone: subZone,
    password,
    password_confirmation: confirmPassword
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !number || !state || !stateCode || !zone || !subZone || !password || !confirmPassword) {
      toast.error('Provide all Information');
      return;
    }
  
    if (password !== confirmPassword) {
      toast.error("Your Passwords don't match");
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error('Network response was not ok: ' + errorText);
      }
  
      const result = await response.json();
      console.log(result);
  
      toast.success('Account Created Successfully');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      toast.error('Failed to create account');
    }
  }

  return (
    <>
      <Toaster />

      <section className="flex">
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
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="jane123@email.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Phone Number
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="+234900000000" value={number} onChange={e => setNumber(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Password
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" value={password} onChange={e => setPassword(e.target.value)} />
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  COnfirm Password
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-confirm-password" type="password" placeholder="******************" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  State
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" value={state} onChange={e => setState(e.target.value)} />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                  Code
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" value={stateCode} onChange={e => setStateCode(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Zone
                </label>
                <div className="relative">
                  <select
                    id="zone-select"
                    value={zone}
                    onChange={e => setZone(e.target.value)}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select a zone</option>
                    {sub.map((sz) => (
                      <option key={sz.zone} value={sz.zone}>{sz.zone}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Sub-ZOne
                </label>
                <div className="relative">
                  <select
                    id="subzone-select"
                    value={subZone}
                    onChange={e => setSubZone(e.target.value)}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select a subzone</option>
                    {selectedZoneObj?.subzones.map((subzone) => (
                      <option key={subzone} value={subzone}>{subzone}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
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
                    className="font-normal text-black transition-colors hover:text-gray-900 underline text"
                  >
                    Terms and Conditions
                  </a>  

                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              checked={terms}
            />
             <Typography variant="small" color="gray">If you have an Account  <Link className='font-normal text-black underline' to={"/sign-in"} >Sign In</Link></Typography>
            <button type="submit" className="bg-black w-full text-white p-3 mt-4 rounded">Create Account</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
