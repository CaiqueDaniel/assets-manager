import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Collapse,
  IconButton,
} from '@mui/material';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

function Root<T extends { id: string }>({
  columns,
  children,
  nested,
}: RootProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {nested ? <TableCell width="10px" /> : <></>}
            {columns.map((column) => (
              <TableCell>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}

type RootProps<T> = PropsWithChildren & {
  columns: ReactNode[];
  nested?: boolean;
};

function Row({ children, component }: RowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {children ? (
          <TableCell>
            <IconButton size="small" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            </IconButton>
          </TableCell>
        ) : (
          <></>
        )}
        {component}
      </TableRow>

      {children ? (
        <TableRow>
          <TableCell sx={{ p: isOpen ? undefined : 0 }} colSpan={6}>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              {children}
            </Collapse>
          </TableCell>
        </TableRow>
      ) : (
        <></>
      )}
    </>
  );
}

type RowProps = PropsWithChildren & {
  component: ReactNode;
};

export const DataGrid = Object.assign(Root, { Row });
