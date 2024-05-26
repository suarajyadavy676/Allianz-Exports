import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div>
       <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <RxHamburgerMenu/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <img src="./logo.png" alt="logo" width={200} />        
          </DrawerHeader>

          <DrawerBody>
          <div className='text-center'>
          <p className='my-4 hover:text-blue-700'><Link to='/'>Home</Link></p>
          <p className='my-4 hover:text-blue-700'>About Us</p>
          <p className='my-4 hover:text-blue-700'>Careers</p>
          <p className='my-4 hover:text-blue-700'>Contact</p>
          <button className="bg-blue-600 text-white py-1 px-2 rounded-md my-4">Log In</button>
          </div>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Hamburger
