function ViewDetailsButton({ label, onClick }) {
  return (
    <button className="bg-[#10823A] hover:bg-[#10823A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onClick}>
      {/* <label>View Product</label> */}
      {label}
    </button>
  );
}

export default ViewDetailsButton;