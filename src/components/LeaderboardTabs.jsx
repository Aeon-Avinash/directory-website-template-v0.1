import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const LeaderboardTable = ({ data, columns }) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b">
          {columns.map((column, index) => (
            <th key={index} className="py-2 px-4 text-left">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="py-2 px-4">
                {column === 'Rank' ? item.rank :
                 column === 'Name' ? <span className="font-semibold">{item.name}</span> :
                 column === 'Category' ? item.category :
                 column === 'GitHub Stars' ? item.stars.toLocaleString() :
                 column === 'Monthly Traffic' ? item.traffic.toLocaleString() :
                 column === 'Trend' ? <span className="text-green-500">{item.trend}</span> :
                 null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const LeaderboardTabs = ({ githubStars, popularTools, trendingTools }) => {
  return (
    <Tabs defaultValue="github">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="github">GitHub Stars</TabsTrigger>
        <TabsTrigger value="popular">Popular</TabsTrigger>
        <TabsTrigger value="trending">Trending</TabsTrigger>
      </TabsList>
      <TabsContent value="github">
        <LeaderboardTable 
          data={githubStars} 
          columns={['Rank', 'Name', 'Category', 'GitHub Stars']} 
        />
      </TabsContent>
      <TabsContent value="popular">
        <LeaderboardTable 
          data={popularTools} 
          columns={['Rank', 'Name', 'Category', 'Monthly Traffic']} 
        />
      </TabsContent>
      <TabsContent value="trending">
        <LeaderboardTable 
          data={trendingTools} 
          columns={['Rank', 'Name', 'Category', 'Trend']} 
        />
      </TabsContent>
    </Tabs>
  );
};

export default LeaderboardTabs;