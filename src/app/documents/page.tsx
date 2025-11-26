import { AppLayout } from '@/components/layout/app-layout';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { documents } from '@/lib/data';
import { Download, Share2, Upload, FileText, FileSpreadsheet, FileDigit } from 'lucide-react';
import { format } from 'date-fns';

const getFileIcon = (type: 'PDF' | 'Word' | 'Spreadsheet') => {
    switch(type) {
        case 'PDF': return <FileText className="h-5 w-5 text-red-500" />;
        case 'Word': return <FileText className="h-5 w-5 text-blue-500" />;
        case 'Spreadsheet': return <FileSpreadsheet className="h-5 w-5 text-green-500" />;
        default: return <FileDigit className="h-5 w-5 text-muted-foreground" />;
    }
}

export default function DocumentRepositoryPage() {
  return (
    <AppLayout pageTitle="Document Repository">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>Company Documents</CardTitle>
                <CardDescription>
                A centralized repository for important files.
                </CardDescription>
            </div>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium flex items-center gap-2">
                    {getFileIcon(doc.type)}
                    {doc.name}
                  </TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{format(doc.lastModified, 'PPP')}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
