import Table from "../../../../Components/table/Table"
import TableHeadingRow from "../../../../Components/table/TableHeadingRow"
import TableHeading from "../../../../Components/table/TableHeading"
import TextCell from "../../../../Components/table/TextCell"
import ViewTableButton from "../../../../Components/table/ViewTableButton"
import EditTableButton from "../../../../Components/table/EditTableButton"
import DeleteTableButton from "../../../../Components/table/DeleteTableButton"
import TableButtonCell from "../../../../Components/table/TableButtonCell"
import TableRow from "../../../../Components/table/TableRow"
import TableBody from "../../../../Components/table/TableBody"
import ImageCell from "../../../../Components/table/ImageCell"
import TableImage from "../../../../Components/table/TableImage"

function BrandTable({

  brand,
  setIsViewModalOpen, setIsEditModalOpen, setIsDeleteModalOpen,
  setSelectedBrand,

}) {
  return (

    <Table>

      <TableHeadingRow>
        <TableHeading text="Image" />
        <TableHeading text="Name" />
        <TableHeading text="Link" />
        <TableHeading align={"text-right"} text="Action" />
      </TableHeadingRow>

      <TableBody>
        {brand.map(brand => (
          <TableRow key={brand._id} item={brand}>
            <ImageCell>
              <TableImage img={brand.image} />
            </ImageCell>
            <TextCell text={brand.name} />
            <TextCell text={brand.link} />
            <TableButtonCell>
              <ViewTableButton
                onClick={() => {
                  setSelectedBrand(brand)
                  setIsViewModalOpen(true)
                }}
              />
              <EditTableButton
                onClick={() => {
                  setSelectedBrand(brand)
                  setIsEditModalOpen(true)
                }}
              />
              <DeleteTableButton
                onClick={() => {
                  setSelectedBrand(brand)
                  setIsDeleteModalOpen(true)
                }}
              />
            </TableButtonCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
  )
}

export default BrandTable
