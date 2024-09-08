import React from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button'
const OTPVerfication = () => {
  return (
    <div>
        <div>
            <InputOTP maxLength={10}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={5} />
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
                <InputOTPSlot index={8} />
                <InputOTPSlot index={9} />
            </InputOTPGroup>
        </InputOTP>
        <Button className="w-full bg-blue-500 bottom-10 my-11" type="submit"  >Submit</Button>

        </div>
    </div>
  )
}

export default OTPVerfication