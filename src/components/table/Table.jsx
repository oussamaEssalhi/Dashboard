import "./table.css"
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';




const Table = ({dataRow,dataColumn}) => {

  return (
    <div className='table-content'>
      <Box sx={{ height: 600, width: '99%' }}>
      <DataGrid
        className='table-grid'
        rows={dataRow}
        columns={dataColumn}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize:10,
            },
          },
        }}
        // for filter column
        slots={{toolbar:GridToolbar}}
        // for search
        slotProps={{ toolbar: {
          showQuickFilter:true,
          quickFilterProps:{
            debounceMs:500
          }
        } }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        // disableColumnSelector
        // disableDensitySelector
      />
    </Box>
    </div>
  )
}

export default Table