import MembershipCard from '../../components/MembershipCard'

const Shop = () => {
  return (
    <>
    <MembershipCard
      type="Gold Membership"
      perks={['Exclusive access to events', 'Monthly newsletters', 'Discounts at partner stores']}
      eventDiscounts="Up to 50% off"
      price="$99/year"
      accessToResources={['Online courses', 'Member-only forums', 'Networking events']}
    />
    </>
  )
}

export default Shop