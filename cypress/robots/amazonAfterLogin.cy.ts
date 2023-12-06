import { AddressRobotEyes, AddressRobotHands } from "./AddressDeliveryAndPayment/addressandPayment"
import { LoginRobotHands } from "./Login/Login"
import { PrimeRobotHands } from "./Prime/primeDeliveryDate"
import { TodaysDealDependencies } from "./TodaysDeal/TodaysDeal"

context('Amazon Application testing with Cypress',()=>{
    const AmazonDependencies = new TodaysDealDependencies()
    const PrimeHands = new PrimeRobotHands()
    const DeliveryFormHands = new AddressRobotHands()
    const DeliveryFormEyes = new AddressRobotEyes()
    const LoginHands = new LoginRobotHands()
    
    before(() => {
        AmazonDependencies.visitPage()
    });

describe('Amazon Application testing After login',()=>{
    it('Enable prime option for items', ()=> {
        LoginHands.clickOnLoginBtn()
        LoginHands.loginUsingCrediantials()

    })


    it('prime  item', ()=> {
    
        PrimeHands.clickOnSecondItemGrid()
        PrimeHands.clickOnPrimeCheckBox()
        PrimeHands.getDeliveryDateForItem()
    })

    it('Add payment and address for ordered item', ()=> {
        DeliveryFormHands.openMyOrders()
        LoginHands.loginUsingCrediantials()
        DeliveryFormHands.selectPrevYearOrderDetails()
        DeliveryFormHands.selectFirstItemAndOrder()

        DeliveryFormHands.addNewAddressToDelivery()
        
    })

    it('Add payment and address for ordered item', ()=> {
        DeliveryFormEyes.addressFormPopUp()
        DeliveryFormHands.fillTheAddressFormAndSubmit()
        DeliveryFormEyes.verifyEnteredAddress()
        DeliveryFormHands.selectNetBankingOption()
        DeliveryFormHands.selectBank()
        DeliveryFormEyes.verifyBank()
        })
    })
})